import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etgxem4dq.css';
import '../../css/g/gvegicjck.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="etgxem4dq"/><path class="gvegicjck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-back-bold-duotone"} {...others} />);
}

export default Component;

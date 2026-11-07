import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy2l7ab8f.css';
import '../../css/s/s6xf6abum.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zy2l7ab8f"/><path class="s6xf6abum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:outgoing-call-rounded-outline"} {...others} />);
}

export default Component;

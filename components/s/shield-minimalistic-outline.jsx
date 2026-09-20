import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lns7h3qht.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lns7h3qht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-minimalistic-outline"} {...others} />);
}

export default Component;

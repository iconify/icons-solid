import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6tzh5bbz.css';
import '../../css/x/xkrbx0bjf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a6tzh5bbz"/><path class="xkrbx0bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:display-bold-duotone"} {...others} />);
}

export default Component;

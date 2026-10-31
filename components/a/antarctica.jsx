import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y02gaibli.css';
import '../../css/w/wgcfbo68c.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="y02gaibli"/><path class="wgcfbo68c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:antarctica"} {...others} />);
}

export default Component;

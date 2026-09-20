import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pil_nmbqz.css';
import '../../css/y/ydj8k-bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pil_nmbqz"/><path class="ydj8k-bvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:head-side-mask"} {...others} />);
}

export default Component;

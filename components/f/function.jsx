import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdnkc-v7d.css';
import '../../css/p/pd8vq-blm.css';
import '../../css/u/u0ofk_h1t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fdnkc-v7d"/><path class="pd8vq-blm"/><path class="u0ofk_h1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:function"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyz1abdrz.css';
import '../../css/g/g97lob8cr.css';
import '../../css/i/ig2qa8liy.css';
import '../../css/d/dgrb85brx.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/g/gm9_6hblj.css';
import '../../css/z/z2qip-omr.css';
import '../../css/n/nr2vhsfwv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pyz1abdrz"/><path class="g97lob8cr"/><path class="ig2qa8liy"/><path class="dgrb85brx"/><g class="dcqdxh5zc"><path class="gm9_6hblj"/><path class="z2qip-omr"/><path class="nr2vhsfwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:high-speed-train"} {...others} />);
}

export default Component;

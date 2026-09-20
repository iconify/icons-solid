import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6fqwjbfy.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/r/r8_-_7r8z.css';
import '../../css/z/zgzywjrnw.css';
import '../../css/c/cpyt-0b3v.css';
import '../../css/m/mygmhcbuk.css';
import '../../css/w/wcoktbc4g.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGQG2K2mwv" class="y6fqwjbfy"/></defs><path class="amn_b-_3e"/><path class="r8_-_7r8z"/><path class="zgzywjrnw"/><use href="#SVGQG2K2mwv"/><path class="cpyt-0b3v"/><use href="#SVGQG2K2mwv"/><path class="mygmhcbuk"/><path class="wcoktbc4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-medium-skin-tone"} {...others} />);
}

export default Component;

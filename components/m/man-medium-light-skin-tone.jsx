import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6fqwjbfy.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/b/b55wkeuui.css';
import '../../css/z/z5agh_hpf.css';
import '../../css/c/cpyt-0b3v.css';
import '../../css/m/mygmhcbuk.css';
import '../../css/w/wcoktbc4g.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGQG2K2mwv" class="y6fqwjbfy"/></defs><path class="amn_b-_3e"/><path class="b55wkeuui"/><path class="z5agh_hpf"/><use href="#SVGQG2K2mwv"/><path class="cpyt-0b3v"/><use href="#SVGQG2K2mwv"/><path class="mygmhcbuk"/><path class="wcoktbc4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-medium-light-skin-tone"} {...others} />);
}

export default Component;

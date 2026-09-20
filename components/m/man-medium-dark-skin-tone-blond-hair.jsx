import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6fqwjbfy.css';
import '../../css/b/b55wkeuui.css';
import '../../css/n/nt_ungbxt.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/a/as4u65b9u.css';
import '../../css/m/mygmhcbuk.css';
import '../../css/b/b0sxd4b_l.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGQG2K2mwv" class="y6fqwjbfy"/></defs><path class="b55wkeuui"/><path class="nt_ungbxt"/><path class="amn_b-_3e"/><use href="#SVGQG2K2mwv"/><path class="as4u65b9u"/><use href="#SVGQG2K2mwv"/><path class="mygmhcbuk"/><path class="b0sxd4b_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-medium-dark-skin-tone-blond-hair"} {...others} />);
}

export default Component;

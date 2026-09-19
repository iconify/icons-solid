import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/j/jmuyqr02f.css';
import '../../css/k/kvff6pbwz.css';
import '../../css/s/s9m9wvbyy.css';
import '../../css/v/v5mw4abkk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJWPrJdDI"><g class="hv130ab-t"><ellipse class="jmuyqr02f"/><path class="kvff6pbwz"/><circle class="s9m9wvbyy"/><circle class="v5mw4abkk"/></g></mask></defs><path mask="url(#SVGJWPrJdDI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:soap-bubble"} {...others} />);
}

export default Component;

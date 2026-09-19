import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/j/jh506iphg.css';
import '../../css/c/cz-xh6lnw.css';
import '../../css/c/c9e4w6bhq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBeBcAesw"><g class="hv130ab-t"><path class="jh506iphg"/><path class="cz-xh6lnw"/><path class="c9e4w6bhq"/></g></mask></defs><path mask="url(#SVGBeBcAesw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:lip-gloss"} {...others} />);
}

export default Component;

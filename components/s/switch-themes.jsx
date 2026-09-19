import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/g/gopxn0bty.css';
import '../../css/t/t-9twgrad.css';
import '../../css/m/mfdkm_-jy.css';
import '../../css/n/n9w1ojbeo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWpwvuGAr"><g class="hv130ab-t"><path clip-rule="evenodd" class="gopxn0bty"/><path class="t-9twgrad"/><path class="mfdkm_-jy"/><path class="n9w1ojbeo"/></g></mask></defs><path mask="url(#SVGWpwvuGAr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:switch-themes"} {...others} />);
}

export default Component;

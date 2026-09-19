import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/ah54-cccv.css';
import '../../css/c/cyf0llfok.css';
import '../../css/z/zxhwh9mgr.css';
import '../../css/u/uu8-2gbpn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgmrblevU"><g class="ufeehvblu"><rect transform="rotate(-45 9.858 29.657)" class="ah54-cccv"/><path class="cyf0llfok"/><path class="zxhwh9mgr"/><path class="uu8-2gbpn"/></g></mask></defs><path mask="url(#SVGgmrblevU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:heater-resistor"} {...others} />);
}

export default Component;

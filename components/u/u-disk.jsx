import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/ynmj3tykv.css';
import '../../css/p/ppyzrxzkm.css';
import '../../css/v/vv2y0abry.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWqLWpd9A"><g class="rohhhzb0l"><path class="ynmj3tykv"/><path class="ppyzrxzkm"/><path class="vv2y0abry"/></g></mask></defs><path mask="url(#SVGWqLWpd9A)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:u-disk"} {...others} />);
}

export default Component;

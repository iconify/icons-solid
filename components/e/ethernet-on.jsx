import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/y/yt7696q7d.css';
import '../../css/g/gcdut9pir.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTrxrfcnb"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="yt7696q7d"/><path class="gcdut9pir"/></g></mask></defs><path mask="url(#SVGTrxrfcnb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ethernet-on"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/w/wnfe9p2uz.css';
import '../../css/r/r-mrtlb8m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzcZtSACT"><g class="hv130ab-t"><rect transform="rotate(-45 17 24.071)" class="wnfe9p2uz"/><path class="r-mrtlb8m"/></g></mask></defs><path mask="url(#SVGzcZtSACT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:refresh-one"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynbg-8bdt.css';
import '../../css/o/oy9k2qbwz.css';
import '../../css/x/xjvqm3bsg.css';
import '../../css/s/sarb1klbs.css';
import '../../css/b/b_7tc_lvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUdT5TdlS"><g class="ft5dv1b6b"><path class="ynbg-8bdt"/><path class="oy9k2qbwz"/><circle class="xjvqm3bsg"/><circle class="sarb1klbs"/><path class="b_7tc_lvk"/></g></mask></defs><path mask="url(#SVGUdT5TdlS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shopping-cart"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xaouk8u6s.css';
import '../../css/o/oy9k2qbwz.css';
import '../../css/x/xjvqm3bsg.css';
import '../../css/s/sarb1klbs.css';
import '../../css/y/yuvipt4pp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWNCDKewo"><g class="ft5dv1b6b"><path class="xaouk8u6s"/><path class="oy9k2qbwz"/><circle class="xjvqm3bsg"/><circle class="sarb1klbs"/><path class="yuvipt4pp"/></g></mask></defs><path mask="url(#SVGWNCDKewo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shopping-cart-del"} {...others} />);
}

export default Component;

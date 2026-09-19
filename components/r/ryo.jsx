import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4mii_bgs.css';
import '../../css/m/md286fbip.css';
import '../../css/d/devv6ob4x.css';
import '../../css/f/fo-08g2fu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="e4mii_bgs"/><g class="md286fbip"><path class="devv6ob4x"/><path class="fo-08g2fu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ryo"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rdnexrb-i.css';
import '../../css/t/tbnh3xbqt.css';
import '../../css/b/bq_htov1v.css';
import '../../css/p/p5eo-acjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rdnexrb-i"/><path class="tbnh3xbqt"/><path class="bq_htov1v"/><path class="p5eo-acjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:reload"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e1_dsdb2x.css';
import '../../css/c/cy07d15rp.css';
import '../../css/f/fdsu-dbih.css';
import '../../css/w/wtnotgb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e1_dsdb2x"/><path class="cy07d15rp"/><path class="fdsu-dbih"/><path class="wtnotgb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-broken"} {...others} />);
}

export default Component;

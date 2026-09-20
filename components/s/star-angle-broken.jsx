import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vcsrxbc2o.css';
import '../../css/r/ruikyfbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vcsrxbc2o"/><path class="ruikyfbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-angle-broken"} {...others} />);
}

export default Component;

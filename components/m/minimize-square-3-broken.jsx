import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vv3m6lbyb.css';
import '../../css/r/r9eucsbka.css';
import '../../css/v/v6xozwwqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vv3m6lbyb"/><path class="r9eucsbka"/><path class="v6xozwwqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-3-broken"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/njv_4__ad.css';
import '../../css/o/o2k9am28j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="njv_4__ad"/><path class="o2k9am28j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-warning-3"} {...others} />);
}

export default Component;

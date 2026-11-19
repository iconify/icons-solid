import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuch9bb4j.css';
import '../../css/x/xx8oo4bdw.css';
import '../../css/h/hcs1u7pih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yuch9bb4j"/><path class="xx8oo4bdw"/><path class="hcs1u7pih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:taxi-front"} {...others} />);
}

export default Component;

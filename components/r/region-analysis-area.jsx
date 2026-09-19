import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcnawdb5g.css';
import '../../css/t/tkku46-oc.css';

const viewBox = {"width":32,"height":32};
const content = `<defs/><path class="fcnawdb5g"/><path class="tkku46-oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:region-analysis-area"} {...others} />);
}

export default Component;

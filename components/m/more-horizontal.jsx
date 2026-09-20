import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9jxybcpr.css';
import '../../css/x/xs7xanrwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u9jxybcpr"/><path vector-effect="non-scaling-stroke" class="xs7xanrwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:more-horizontal"} {...others} />);
}

export default Component;

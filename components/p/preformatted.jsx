import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yztdgircs.css';
import '../../css/h/hwcdu9nye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yztdgircs"/><path vector-effect="non-scaling-stroke" class="hwcdu9nye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:preformatted"} {...others} />);
}

export default Component;

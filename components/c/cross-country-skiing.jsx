import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oilb6wval.css';
import '../../css/j/jd3fx3b7u.css';
import '../../css/r/rydwybc0b.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="cuyn6tgcc"><ellipse class="oilb6wval"/><path class="jd3fx3b7u"/></g><path class="rydwybc0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:cross-country-skiing"} {...others} />);
}

export default Component;

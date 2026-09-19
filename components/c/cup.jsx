import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwlrh_b9g.css';
import '../../css/f/fdifnfbyu.css';
import '../../css/a/az44fuble.css';
import '../../css/t/t7nrd7mwe.css';
import '../../css/y/yc5f-vwyd.css';
import '../../css/o/obmk8zbir.css';
import '../../css/d/dhdf3tz-y.css';

const viewBox = {"width":100,"height":89.014};
const content = `<path class="iwlrh_b9g"/><path class="fdifnfbyu"/><path class="az44fuble"/><path class="t7nrd7mwe"/><path class="yc5f-vwyd"/><path class="obmk8zbir"/><path class="dhdf3tz-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:cup"} {...others} />);
}

export default Component;

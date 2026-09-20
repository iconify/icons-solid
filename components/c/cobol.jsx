import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvz1_m6rm.css';
import '../../css/c/c0nme4boi.css';
import '../../css/t/tqm4eob6w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pvz1_m6rm"/><path class="c0nme4boi"/><path class="tqm4eob6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:cobol"} {...others} />);
}

export default Component;

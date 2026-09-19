import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbqm40wsr.css';
import '../../css/x/xgj3z1bgb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bbqm40wsr"/><path class="xgj3z1bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:credit-card"} {...others} />);
}

export default Component;

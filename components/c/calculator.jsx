import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt88iibqu.css';
import '../../css/n/nsbcuotwt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wt88iibqu"/><path class="nsbcuotwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:calculator"} {...others} />);
}

export default Component;

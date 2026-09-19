import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yn02h8b2q.css';
import '../../css/q/q8k6jfbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yn02h8b2q"/><path class="q8k6jfbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bitcoin-circle"} {...others} />);
}

export default Component;

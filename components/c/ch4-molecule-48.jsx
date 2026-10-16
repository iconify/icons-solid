import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymr7lm3zo.css';
import '../../css/u/u38gi5bmv.css';
import '../../css/x/xwbtxnr1s.css';
import '../../css/f/fued98b4z.css';
import '../../css/q/qmx9hqbvj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ymr7lm3zo"/><path class="u38gi5bmv"/><path class="xwbtxnr1s"/><path class="fued98b4z"/><path class="qmx9hqbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ch4-molecule-48"} {...others} />);
}

export default Component;

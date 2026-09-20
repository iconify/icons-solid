import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1661jbie.css';
import '../../css/o/og7tgmqnz.css';
import '../../css/q/q42y53buw.css';
import '../../css/x/xlkbq6frf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x1661jbie"/><path clip-rule="evenodd" class="og7tgmqnz"/><path clip-rule="evenodd" class="q42y53buw"/><path class="xlkbq6frf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:portrait-lock-flat"} {...others} />);
}

export default Component;

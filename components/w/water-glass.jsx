import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0e4rvbbj.css';
import '../../css/e/etr8rqb5s.css';
import '../../css/w/wqgkgyc2m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o0e4rvbbj"/><path class="etr8rqb5s"/><path class="wqgkgyc2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:water-glass"} {...others} />);
}

export default Component;

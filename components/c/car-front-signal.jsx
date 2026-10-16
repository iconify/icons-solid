import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8cy0tbyu.css';
import '../../css/c/c6e4jxb6m.css';
import '../../css/c/ceybkyb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v8cy0tbyu"/><path class="c6e4jxb6m"/><path class="ceybkyb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:car-front-signal"} {...others} />);
}

export default Component;

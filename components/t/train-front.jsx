import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyrbmh4wb.css';
import '../../css/k/kjsu1jshe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eyrbmh4wb"/><path class="kjsu1jshe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:train-front"} {...others} />);
}

export default Component;

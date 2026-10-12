import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gd8ngp5ey.css';
import '../../css/n/neaw9iejc.css';
import '../../css/k/kw8zqsv0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gd8ngp5ey"/><path class="neaw9iejc"/><path class="kw8zqsv0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:buildings"} {...others} />);
}

export default Component;

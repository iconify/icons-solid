import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izrdgvbpt.css';
import '../../css/q/qzo-8rbyh.css';
import '../../css/u/uyv8hzbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="izrdgvbpt"/><path class="qzo-8rbyh"/><path class="uyv8hzbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book"} {...others} />);
}

export default Component;

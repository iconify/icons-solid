import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4b_jrbah.css';
import '../../css/b/b_fjcnbub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r4b_jrbah"/><path class="b_fjcnbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lightning-fast"} {...others} />);
}

export default Component;

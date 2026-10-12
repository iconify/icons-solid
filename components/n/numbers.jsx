import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jfmrt9ber.css';
import '../../css/e/e_pvmjeii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jfmrt9ber"/><path class="e_pvmjeii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:numbers"} {...others} />);
}

export default Component;

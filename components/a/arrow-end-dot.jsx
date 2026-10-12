import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y0rh3zbcy.css';
import '../../css/o/o_ilagbnl.css';
import '../../css/f/f43-ymbwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y0rh3zbcy"/><path class="o_ilagbnl"/><path class="f43-ymbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-end-dot"} {...others} />);
}

export default Component;

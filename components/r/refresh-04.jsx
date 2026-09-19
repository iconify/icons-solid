import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/csx-dx6zn.css';
import '../../css/q/qp8um99ro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="csx-dx6zn"/><path class="qp8um99ro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:refresh-04"} {...others} />);
}

export default Component;

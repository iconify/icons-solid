import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a0sygjdrl.css';
import '../../css/b/buidegbva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a0sygjdrl"/><path class="buidegbva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laptop-check"} {...others} />);
}

export default Component;

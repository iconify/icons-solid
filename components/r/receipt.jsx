import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o4qcegbya.css';
import '../../css/a/ao2f_wymr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="o4qcegbya"/><path class="ao2f_wymr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:receipt"} {...others} />);
}

export default Component;

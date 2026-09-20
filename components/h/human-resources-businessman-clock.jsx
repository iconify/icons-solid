import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kyd7epibs.css';
import '../../css/o/o5xyf-jdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kyd7epibs"/><path class="o5xyf-jdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-businessman-clock"} {...others} />);
}

export default Component;

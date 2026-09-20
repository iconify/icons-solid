import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aan6ybcjj.css';
import '../../css/k/k5qm0cbja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aan6ybcjj"/><path class="k5qm0cbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-dashed-line-duotone"} {...others} />);
}

export default Component;

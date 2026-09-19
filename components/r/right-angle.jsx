import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p-wpj6bfy.css';
import '../../css/b/bzm1v6wbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p-wpj6bfy"/><path class="bzm1v6wbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:right-angle"} {...others} />);
}

export default Component;

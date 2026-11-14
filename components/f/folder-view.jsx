import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z5jq7eatv.css';
import '../../css/j/jsl_plbqj.css';
import '../../css/b/b-4r_xb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z5jq7eatv"/><path class="jsl_plbqj"/><path class="b-4r_xb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-view"} {...others} />);
}

export default Component;

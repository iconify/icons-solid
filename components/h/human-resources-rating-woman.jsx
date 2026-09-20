import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d_a1xjbte.css';
import '../../css/h/hf-zz_b3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d_a1xjbte"/><path class="hf-zz_b3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-rating-woman"} {...others} />);
}

export default Component;

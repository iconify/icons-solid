import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqmze_b9t.css';
import '../../css/t/t5ldklm_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uqmze_b9t"/><path class="t5ldklm_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medicine-search-4"} {...others} />);
}

export default Component;

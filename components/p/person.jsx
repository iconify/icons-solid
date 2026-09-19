import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/llcnu82_z.css';
import '../../css/s/s0xevyb8t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="llcnu82_z"/><path class="s0xevyb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:person"} {...others} />);
}

export default Component;

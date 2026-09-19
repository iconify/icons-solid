import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/azkq_8d6w.css';
import '../../css/m/m2l6d-bhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="azkq_8d6w"/><path class="m2l6d-bhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:task-done-02"} {...others} />);
}

export default Component;

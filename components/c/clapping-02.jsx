import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-493nb9q.css';
import '../../css/z/znyp0ehev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a-493nb9q"/><path class="znyp0ehev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clapping-02"} {...others} />);
}

export default Component;

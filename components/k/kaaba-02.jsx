import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tg3tk2b5f.css';
import '../../css/r/rnlqcto9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tg3tk2b5f"/><path class="rnlqcto9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:kaaba-02"} {...others} />);
}

export default Component;

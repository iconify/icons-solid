import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m81z6cc7b.css';
import '../../css/h/hm5awrbsf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="m81z6cc7b"/><path class="hm5awrbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:laptop"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eb-jj88gg.css';
import '../../css/z/z7ffr1kwi.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="eb-jj88gg"/><path class="z7ffr1kwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:candy"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j78p-caua.css';
import '../../css/v/vutiidbtf.css';
import '../../css/c/ck9sfsb3t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="j78p-caua"/><circle class="vutiidbtf"/><path class="ck9sfsb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:git-compare"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j78p-caua.css';
import '../../css/y/y56p--bum.css';
import '../../css/v/vutiidbtf.css';
import '../../css/p/p357q9zfx.css';
import '../../css/n/n79914brm.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="j78p-caua"/><circle class="y56p--bum"/><circle class="vutiidbtf"/><path class="p357q9zfx"/><path class="n79914brm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:git-request-cross"} {...others} />);
}

export default Component;

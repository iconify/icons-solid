import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qdbns1bsd.css';
import '../../css/q/q86jc-i-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qdbns1bsd"/><path class="q86jc-i-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:import3"} {...others} />);
}

export default Component;

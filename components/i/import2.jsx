import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q86jc-i-m.css';
import '../../css/k/k7ky6prup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q86jc-i-m"/><path class="k7ky6prup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:import2"} {...others} />);
}

export default Component;

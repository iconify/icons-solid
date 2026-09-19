import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/um27ogbzd.css';
import '../../css/o/ol6ywj3wc.css';
import '../../css/k/k0jum4blu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="um27ogbzd"/><path class="ol6ywj3wc"/><path class="k0jum4blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:clock-rotate-right"} {...others} />);
}

export default Component;

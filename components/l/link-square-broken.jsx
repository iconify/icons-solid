import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9ln-r5qf.css';
import '../../css/l/lik3knb3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o9ln-r5qf"/><path class="lik3knb3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-square-broken"} {...others} />);
}

export default Component;

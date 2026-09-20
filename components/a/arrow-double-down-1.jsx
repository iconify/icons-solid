import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3kl4lbok.css';
import '../../css/x/xxvwfobqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t3kl4lbok"/><path class="xxvwfobqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-double-down-1"} {...others} />);
}

export default Component;

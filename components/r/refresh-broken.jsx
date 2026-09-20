import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fyulbt9hy.css';
import '../../css/k/kb74m1oom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fyulbt9hy"/><path class="kb74m1oom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-broken"} {...others} />);
}

export default Component;

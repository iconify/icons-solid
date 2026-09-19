import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/huxdyz4vm.css';
import '../../css/n/ndexczbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="huxdyz4vm"/><path class="ndexczbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-sanitizer-liquid-virus-block"} {...others} />);
}

export default Component;

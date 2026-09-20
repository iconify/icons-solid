import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b7-l3ptxy.css';
import '../../css/b/bd2-kmgzj.css';
import '../../css/t/t8h1t8byf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b7-l3ptxy"/><path class="bd2-kmgzj"/><path class="t8h1t8byf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:printer"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q1wkn1bon.css';
import '../../css/y/y19ony82e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q1wkn1bon"/><path class="y19ony82e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:security-shield"} {...others} />);
}

export default Component;

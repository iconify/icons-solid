import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d3zx-49_d.css';
import '../../css/j/jm8rwpb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d3zx-49_d"/><path class="jm8rwpb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-check"} {...others} />);
}

export default Component;

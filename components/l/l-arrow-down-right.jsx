import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l8p9sw6ku.css';
import '../../css/n/nawdfzb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l8p9sw6ku"/><path class="nawdfzb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:l-arrow-down-right"} {...others} />);
}

export default Component;

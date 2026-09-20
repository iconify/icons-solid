import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qwq1nacmx.css';
import '../../css/f/fas4hebbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qwq1nacmx"/><path class="fas4hebbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:preview"} {...others} />);
}

export default Component;

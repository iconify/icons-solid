import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/do50hmbvn.css';
import '../../css/t/trqow1bwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="do50hmbvn"/><path class="trqow1bwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:round-sticker"} {...others} />);
}

export default Component;

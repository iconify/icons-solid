import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o83lu3b_p.css';
import '../../css/i/iyoee0yll.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="o83lu3b_p"/><path class="iyoee0yll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:qlc"} {...others} />);
}

export default Component;

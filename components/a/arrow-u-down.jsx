import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/ppu0h3vpg.css';
import '../../css/t/t9hq5wiig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ppu0h3vpg"/><path class="t9hq5wiig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-u-down"} {...others} />);
}

export default Component;

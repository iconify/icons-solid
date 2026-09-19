import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bqzdj6p6z.css';
import '../../css/i/ib_0vib5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bqzdj6p6z"/><path class="ib_0vib5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:two-seater-sofa"} {...others} />);
}

export default Component;

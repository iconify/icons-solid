import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/umbgadc1w.css';
import '../../css/j/jxia6j9kw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="umbgadc1w"/><path class="jxia6j9kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tap-07"} {...others} />);
}

export default Component;

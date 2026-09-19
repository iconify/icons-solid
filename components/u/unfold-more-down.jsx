import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/illcy4sad.css';
import '../../css/t/t1ec3k4sy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="illcy4sad"/><path class="t1ec3k4sy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:unfold-more-down"} {...others} />);
}

export default Component;

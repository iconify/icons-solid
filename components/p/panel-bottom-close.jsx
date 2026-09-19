import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eyq-eibqf.css';
import '../../css/o/o78pjwe5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eyq-eibqf"/><path class="o78pjwe5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:panel-bottom-close"} {...others} />);
}

export default Component;

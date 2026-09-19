import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xtuj9jdkl.css';
import '../../css/f/fp1o2osmk.css';
import '../../css/u/udwfq_8gg.css';
import '../../css/t/tvxm_574j.css';
import '../../css/z/zd50g7btg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xtuj9jdkl"/><path class="fp1o2osmk"/><path class="udwfq_8gg"/><path class="tvxm_574j"/><path class="zd50g7btg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:satellite"} {...others} />);
}

export default Component;

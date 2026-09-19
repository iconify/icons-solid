import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/laymhdblb.css';
import '../../css/i/i3yjklbnq.css';
import '../../css/w/ww1uvxbxt.css';
import '../../css/w/wzup-8xfj.css';
import '../../css/j/jfemo-btz.css';
import '../../css/p/p0fj_zv_l.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="laymhdblb"/><circle class="i3yjklbnq"/><path class="ww1uvxbxt"/><path class="wzup-8xfj"/><path class="jfemo-btz"/><path class="p0fj_zv_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-turbo-open"} {...others} />);
}

export default Component;

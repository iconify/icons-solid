import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyz_aqegb.css';
import '../../css/n/n-15uo6oz.css';
import '../../css/g/gtkhd0fad.css';
import '../../css/q/q8m1fzb0u.css';
import '../../css/l/lvxm8lhvh.css';
import '../../css/l/l-b1oybxw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><circle class="fyz_aqegb"/><path class="n-15uo6oz"/><path class="gtkhd0fad"/><path class="q8m1fzb0u"/><path class="lvxm8lhvh"/><path class="l-b1oybxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:turbo"} {...others} />);
}

export default Component;

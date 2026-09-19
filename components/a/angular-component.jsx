import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf4u1os6q.css';
import '../../css/y/yl_li2z4t.css';
import '../../css/e/edskbpa8c.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="tf4u1os6q"><path class="yl_li2z4t"/><path class="edskbpa8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:angular-component"} {...others} />);
}

export default Component;

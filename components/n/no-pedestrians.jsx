import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eit_1l5ho.css';
import '../../css/m/m_lub8jxb.css';
import '../../css/j/ja98fcchj.css';
import '../../css/m/me4ah5v_n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="eit_1l5ho"/><path class="m_lub8jxb"/><path class="ja98fcchj"/><path class="me4ah5v_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:no-pedestrians"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k9m_yqbkl.css';
import '../../css/g/guqbehbzj.css';
import '../../css/c/cuj9bnb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k9m_yqbkl"/><path class="guqbehbzj"/><path class="cuj9bnb5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hamburger-menu-outline"} {...others} />);
}

export default Component;

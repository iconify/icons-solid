import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d67uiab3g.css';
import '../../css/h/hbsfdvpyk.css';
import '../../css/h/htrp6gb9i.css';
import '../../css/g/guehvl8mh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d67uiab3g"/><path class="hbsfdvpyk"/><path class="htrp6gb9i"/><path class="guehvl8mh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:book-open-bookmark"} {...others} />);
}

export default Component;

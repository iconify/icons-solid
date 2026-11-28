import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ib4ikg6hx.css';
import '../../css/e/ekk1d4bph.css';
import '../../css/i/ixff_67er.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ib4ikg6hx"/><path class="ekk1d4bph"/><path class="ixff_67er"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:copy-x"} {...others} />);
}

export default Component;

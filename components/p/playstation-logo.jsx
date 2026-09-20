import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dmyketurs.css';
import '../../css/k/k125c794w.css';
import '../../css/t/t9vexcbvp.css';
import '../../css/c/c2vwqj_xf.css';
import '../../css/q/qt5qaac0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="dmyketurs"/><path class="k125c794w"/><path class="t9vexcbvp"/><path class="c2vwqj_xf"/><path class="qt5qaac0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:playstation-logo"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/i/i_lqrks1h.css';
import '../../css/h/h_79jpbkk.css';
import '../../css/b/bnpdgr2ia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="i_lqrks1h"/><path class="h_79jpbkk"/><path class="bnpdgr2ia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:plurk-logo-3"} {...others} />);
}

export default Component;

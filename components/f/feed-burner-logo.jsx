import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rb-j961er.css';
import '../../css/n/n0-b_oysz.css';
import '../../css/l/ljtm_oblt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="rb-j961er"/><path class="n0-b_oysz"/><path class="ljtm_oblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:feed-burner-logo"} {...others} />);
}

export default Component;

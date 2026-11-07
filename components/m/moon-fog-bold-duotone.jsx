import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayfi16bts.css';
import '../../css/t/tkgsfpb9m.css';
import '../../css/a/a5ofhb9rs.css';
import '../../css/h/hn3-jofuw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/de5deccyd.css';
import '../../css/f/frg8f-bln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ayfi16bts"/><path class="tkgsfpb9m"/><path class="a5ofhb9rs"/><path class="hn3-jofuw"/><g class="xtpeb-edw"><path class="de5deccyd"/><path class="frg8f-bln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-fog-bold-duotone"} {...others} />);
}

export default Component;

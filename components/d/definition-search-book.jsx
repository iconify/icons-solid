import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2j5fwb-r.css';
import '../../css/a/axd2u9gpv.css';
import '../../css/h/he39jukbn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v2j5fwb-r"/><path class="axd2u9gpv"/><path class="he39jukbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:definition-search-book"} {...others} />);
}

export default Component;

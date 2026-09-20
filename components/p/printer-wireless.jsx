import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfyycdpcj.css';
import '../../css/b/bqd8obb_n.css';
import '../../css/x/xkkg5jb3p.css';
import '../../css/o/o5-h93buo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="sfyycdpcj"/><path clip-rule="evenodd" class="bqd8obb_n"/><path class="xkkg5jb3p"/><path class="o5-h93buo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:printer-wireless"} {...others} />);
}

export default Component;

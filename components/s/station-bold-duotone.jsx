import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsskqbc7b.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/a11e7l3fm.css';
import '../../css/e/ehxagry8c.css';
import '../../css/b/b9k8owbdf.css';
import '../../css/w/wxz0h6gmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jsskqbc7b"/><g class="xtpeb-edw"><path class="a11e7l3fm"/><path class="ehxagry8c"/><path class="b9k8owbdf"/><path class="wxz0h6gmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkdjn0tvw.css';
import '../../css/y/yc5srhlrk.css';
import '../../css/e/eqo2hkbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bkdjn0tvw"/><path class="yc5srhlrk"/><path class="eqo2hkbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mortarboard-alt-light"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht3awmbjv.css';
import '../../css/q/qk2k3fbxw.css';
import '../../css/y/yi4d1dclt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ht3awmbjv"/><path class="qk2k3fbxw"/><path class="yi4d1dclt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:castle-5"} {...others} />);
}

export default Component;

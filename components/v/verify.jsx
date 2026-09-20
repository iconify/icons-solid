import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mekfajc8j.css';
import '../../css/z/zb63x6-2a.css';
import '../../css/h/hryg0ebnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mekfajc8j"/><path class="zb63x6-2a"/><path class="hryg0ebnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:verify"} {...others} />);
}

export default Component;

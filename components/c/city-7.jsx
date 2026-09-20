import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0nmc9b2i.css';
import '../../css/i/i3onr_bxz.css';
import '../../css/p/pfazahitj.css';
import '../../css/a/a80uv-e5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f0nmc9b2i"/><path class="i3onr_bxz"/><path class="pfazahitj"/><path class="a80uv-e5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-7"} {...others} />);
}

export default Component;

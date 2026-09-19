import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i75qe831z.css';
import '../../css/w/wyuv2ql0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i75qe831z"/><path clip-rule="evenodd" class="wyuv2ql0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:private-driver"} {...others} />);
}

export default Component;

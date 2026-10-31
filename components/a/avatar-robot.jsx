import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gz3sv5byc.css';
import '../../css/u/ubyycbaxw.css';
import '../../css/z/zzhwb5nor.css';
import '../../css/u/uvgh2l5nr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gz3sv5byc wm-shadow"/><path class="ubyycbaxw"/><path class="zzhwb5nor"/><path class="uvgh2l5nr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-robot"} {...others} />);
}

export default Component;

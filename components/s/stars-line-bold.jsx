import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ewnf0czgr.css';
import '../../css/x/x5d6pr60j.css';
import '../../css/e/ee75qzblf.css';
import '../../css/z/zxg-kkqlp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ewnf0czgr"/><path class="x5d6pr60j"/><path class="ee75qzblf"/><path class="zxg-kkqlp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-line-bold"} {...others} />);
}

export default Component;

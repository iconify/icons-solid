import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cho6g1beo.css';
import '../../css/p/pirmk_bad.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="cho6g1beo"/><path class="pirmk_bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:backpack2-fill"} {...others} />);
}

export default Component;

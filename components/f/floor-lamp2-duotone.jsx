import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b94-ymbfh.css';
import '../../css/m/moj7sjbuz.css';
import '../../css/g/gwuluxuii.css';
import '../../css/i/iu_vqlblv.css';
import '../../css/c/cibcb4bcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b94-ymbfh"/><path class="moj7sjbuz"/><path class="gwuluxuii"/><path class="iu_vqlblv"/><path class="cibcb4bcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:floor-lamp2-duotone"} {...others} />);
}

export default Component;

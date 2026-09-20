import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1doryhmy.css';
import '../../css/l/lnsvjbcor.css';
import '../../css/d/dvsr5sbpc.css';
import '../../css/y/y2hkqbbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l1doryhmy"/><path class="lnsvjbcor"/><path class="dvsr5sbpc"/><path class="y2hkqbbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sort-asc-duotone"} {...others} />);
}

export default Component;

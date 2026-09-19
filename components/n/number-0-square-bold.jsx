import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/y/yzqd_nbaw.css';
import '../../css/z/zup7-ab-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="yzqd_nbaw"/><path class="zup7-ab-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-0-square-bold"} {...others} />);
}

export default Component;

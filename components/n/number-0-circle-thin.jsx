import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zup7-ab-f.css';
import '../../css/x/xr1zzs9rr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zup7-ab-f"/><circle class="xr1zzs9rr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-0-circle-thin"} {...others} />);
}

export default Component;

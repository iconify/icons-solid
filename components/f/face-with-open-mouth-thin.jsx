import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/e/erc-dgglp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="xr1zzs9rr"/><path class="erc-dgglp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:face-with-open-mouth-thin"} {...others} />);
}

export default Component;

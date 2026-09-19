import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/a/ab15cybvf.css';
import '../../css/l/lkkvs_bly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ab15cybvf"/><path class="lkkvs_bly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-light"} {...others} />);
}

export default Component;

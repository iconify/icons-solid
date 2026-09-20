import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-47ppb7a.css';
import '../../css/x/xq9g9ub1r.css';
import '../../css/t/tm75_5b1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a-47ppb7a"/><path class="xq9g9ub1r"/><path clip-rule="evenodd" class="tm75_5b1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-charge-filled"} {...others} />);
}

export default Component;

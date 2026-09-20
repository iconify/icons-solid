import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpver0bmr.css';
import '../../css/x/xq9g9ub1r.css';
import '../../css/e/ewlg4yi8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xpver0bmr"/><path class="xq9g9ub1r"/><path clip-rule="evenodd" class="ewlg4yi8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-check-filled"} {...others} />);
}

export default Component;

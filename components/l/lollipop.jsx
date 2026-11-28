import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r78i7gkxp.css';
import '../../css/b/bnwu_lbuf.css';
import '../../css/f/fwq3qmi6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r78i7gkxp"/><path class="bnwu_lbuf"/><path class="fwq3qmi6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:lollipop"} {...others} />);
}

export default Component;

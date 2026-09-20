import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qer-ux0pj.css';
import '../../css/e/e6x_lacct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="qer-ux0pj"/><path class="e6x_lacct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-after-effects-logo"} {...others} />);
}

export default Component;

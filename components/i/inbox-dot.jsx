import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qanwmacin.css';
import '../../css/c/c8gs2oazl.css';
import '../../css/x/xd8yd0bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qanwmacin"/><path class="c8gs2oazl"/><path class="xd8yd0bhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:inbox-dot"} {...others} />);
}

export default Component;

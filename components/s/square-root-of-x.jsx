import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mx2mjsb5b.css';
import '../../css/t/tw71hzafu.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="mx2mjsb5b"/><path class="tw71hzafu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:square-root-of-x"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/y4i6twg9n.css';
import '../../css/c/cnu7twbsj.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="y4i6twg9n"/><path class="cnu7twbsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cabinet-4"} {...others} />);
}

export default Component;

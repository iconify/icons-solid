import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7kyfbcir.css';
import '../../css/x/xj_mdqbri.css';
import '../../css/a/aosh_6bqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k7kyfbcir"/><path class="xj_mdqbri"/><path class="aosh_6bqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:filter-1"} {...others} />);
}

export default Component;

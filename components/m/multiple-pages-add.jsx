import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lxuehcc_g.css';
import '../../css/g/gqvtjotgp.css';
import '../../css/n/nje5g0bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lxuehcc_g"/><path class="gqvtjotgp"/><path class="nje5g0bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:multiple-pages-add"} {...others} />);
}

export default Component;

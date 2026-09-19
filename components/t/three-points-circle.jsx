import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/k/kq1ja_lbr.css';
import '../../css/l/l5flq3uow.css';
import '../../css/c/cwn0h9bfo.css';
import '../../css/q/qmoqhhlgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p9-zrkb4g"/><path class="kq1ja_lbr"/><path class="l5flq3uow"/><path class="cwn0h9bfo"/><path class="qmoqhhlgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:three-points-circle"} {...others} />);
}

export default Component;

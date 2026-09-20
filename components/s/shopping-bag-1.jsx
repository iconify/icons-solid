import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/ec4hlybbx.css';
import '../../css/k/k_p1vh_pm.css';
import '../../css/d/djbc6-y5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="ec4hlybbx"/><path class="k_p1vh_pm"/><path class="djbc6-y5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:shopping-bag-1"} {...others} />);
}

export default Component;

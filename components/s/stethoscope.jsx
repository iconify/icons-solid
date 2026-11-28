import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ta6211bvx.css';
import '../../css/m/m53qvnbuy.css';
import '../../css/u/u4et_3yps.css';
import '../../css/x/x5vqjc9kw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ta6211bvx"/><path class="m53qvnbuy"/><path class="u4et_3yps"/><path class="x5vqjc9kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:stethoscope"} {...others} />);
}

export default Component;

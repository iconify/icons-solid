import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ajsjpob7d.css';
import '../../css/q/qgoj2cb0j.css';
import '../../css/c/c39cbgb9r.css';
import '../../css/s/saqz-qbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ajsjpob7d"/><path class="qgoj2cb0j"/><path class="c39cbgb9r"/><path class="saqz-qbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:prompt"} {...others} />);
}

export default Component;

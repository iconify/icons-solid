import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji7fs3brj.css';
import '../../css/m/miixktbff.css';
import '../../css/r/rih_x8brw.css';
import '../../css/s/sugxsql5m.css';
import '../../css/r/rzr1gwbzx.css';
import '../../css/k/kuffcebqs.css';
import '../../css/c/cte3a84au.css';
import '../../css/q/qr6hk6bab.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ji7fs3brj"/><path class="miixktbff"/><path class="rih_x8brw"/><path class="sugxsql5m"/><path class="rzr1gwbzx"/><path class="kuffcebqs"/><path class="cte3a84au"/><path class="qr6hk6bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:sint-eustatius"} {...others} />);
}

export default Component;

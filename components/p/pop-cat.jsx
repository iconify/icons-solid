import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/err1n2woy.css';
import '../../css/r/raamonbyi.css';
import '../../css/h/hq2799n0i.css';
import '../../css/g/g5za4bq6i.css';
import '../../css/k/k50z3d52f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y9tr6bcfx"><path class="err1n2woy"/><path class="raamonbyi"/><path class="hq2799n0i"/><path class="g5za4bq6i"/><path class="k50z3d52f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:pop-cat"} {...others} />);
}

export default Component;

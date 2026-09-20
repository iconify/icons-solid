import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qmz_z15pg.css';
import '../../css/p/pjn3vtblj.css';
import '../../css/b/bgs7slbrn.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="qmz_z15pg"/><path class="pjn3vtblj"/><path class="bgs7slbrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:work"} {...others} />);
}

export default Component;

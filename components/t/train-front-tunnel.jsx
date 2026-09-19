import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p9olpqbsm.css';
import '../../css/a/a1-t9q27i.css';
import '../../css/n/n12q9ybjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p9olpqbsm"/><path class="a1-t9q27i"/><path class="n12q9ybjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:train-front-tunnel"} {...others} />);
}

export default Component;

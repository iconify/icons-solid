import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5q-rqbde.css';
import '../../css/v/vzzjg9brc.css';
import '../../css/p/potfkcbne.css';
import '../../css/z/z7vfwiebf.css';
import '../../css/t/t5xkztbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u5q-rqbde"/><path class="vzzjg9brc"/><rect class="potfkcbne"/><path class="z7vfwiebf"/><path class="t5xkztbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-to-image"} {...others} />);
}

export default Component;

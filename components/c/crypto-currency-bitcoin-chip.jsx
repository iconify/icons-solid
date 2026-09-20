import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jb-grt_jm.css';
import '../../css/o/o8joigbba.css';
import '../../css/o/o3uru2bok.css';
import '../../css/t/tt2xjccpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jb-grt_jm"/><path class="o8joigbba"/><path class="o3uru2bok"/><path class="tt2xjccpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:crypto-currency-bitcoin-chip"} {...others} />);
}

export default Component;

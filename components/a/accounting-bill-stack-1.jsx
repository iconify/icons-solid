import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ui8npoflg.css';
import '../../css/t/tm6ivlb0n.css';
import '../../css/c/c9jkopq0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ui8npoflg"/><path class="tm6ivlb0n"/><path class="c9jkopq0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:accounting-bill-stack-1"} {...others} />);
}

export default Component;

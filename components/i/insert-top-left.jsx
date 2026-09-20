import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqf6-yolw.css';
import '../../css/t/tdcc_2g8h.css';
import '../../css/x/x6_gz0u2j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="eqf6-yolw"/><path class="tdcc_2g8h"/><path class="x6_gz0u2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:insert-top-left"} {...others} />);
}

export default Component;

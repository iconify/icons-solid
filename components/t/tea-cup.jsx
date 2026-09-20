import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdl7jv-0l.css';
import '../../css/g/g8d1apbol.css';
import '../../css/p/plp57t6nf.css';
import '../../css/z/zokkzerqw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cdl7jv-0l"/><path class="g8d1apbol"/><path class="plp57t6nf"/><path class="zokkzerqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:tea-cup"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/muuwgwuyk.css';
import '../../css/m/mk-by7b4p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="muuwgwuyk"/><path class="mk-by7b4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cloud-remove"} {...others} />);
}

export default Component;

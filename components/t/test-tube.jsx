import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tblaxcceu.css';
import '../../css/o/oex0tpr5i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="tblaxcceu"/><path class="oex0tpr5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:test-tube"} {...others} />);
}

export default Component;

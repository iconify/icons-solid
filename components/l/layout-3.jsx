import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kgjfsfbqb.css';
import '../../css/g/gx_6zacmb.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="kgjfsfbqb"/><path class="gx_6zacmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:layout-3"} {...others} />);
}

export default Component;

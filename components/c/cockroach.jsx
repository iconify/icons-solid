import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9jlpx69u.css';
import '../../css/z/zy4jvvbgc.css';
import '../../css/f/f-nz8pbmv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="r9jlpx69u"/><path class="zy4jvvbgc"/><path class="f-nz8pbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cockroach"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch09qbfwl.css';
import '../../css/b/bcoq-rbfh.css';
import '../../css/h/habi4zc9x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ch09qbfwl"/><path class="bcoq-rbfh"/><path class="habi4zc9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tennis-ball-duo"} {...others} />);
}

export default Component;

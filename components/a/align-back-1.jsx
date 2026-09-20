import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q82-1kbpt.css';
import '../../css/a/acb48hb4h.css';
import '../../css/p/ppjwwcbbh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q82-1kbpt"/><path class="acb48hb4h"/><path class="ppjwwcbbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:align-back-1"} {...others} />);
}

export default Component;

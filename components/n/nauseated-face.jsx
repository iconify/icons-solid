import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7-_1ubpt.css';
import '../../css/x/xz0ej2b-a.css';
import '../../css/u/u6n70hbtk.css';
import '../../css/x/xqfg9cdhq.css';
import '../../css/c/cx_n2ob0h.css';
import '../../css/p/py7cubcbx.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="y7-_1ubpt"/><path class="xz0ej2b-a"/><circle class="u6n70hbtk"/><path class="xqfg9cdhq"/><path class="cx_n2ob0h"/><path class="py7cubcbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nauseated-face"} {...others} />);
}

export default Component;

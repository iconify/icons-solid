import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_weg3b7j.css';
import '../../css/b/btnne-b7c.css';
import '../../css/j/jqwd5dbkd.css';
import '../../css/c/cgeb6tb7m.css';
import '../../css/x/xh7v49b4u.css';
import '../../css/r/r-rethkhw.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="j_weg3b7j"/><g class="btnne-b7c"><circle class="jqwd5dbkd"/><circle class="cgeb6tb7m"/><path class="xh7v49b4u"/><path class="r-rethkhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:circled-human-figure"} {...others} />);
}

export default Component;

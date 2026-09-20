import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_89-rk9c.css';
import '../../css/b/b344efb6w.css';
import '../../css/x/xlm72rbvw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b_89-rk9c"/><path class="b344efb6w"/><path class="xlm72rbvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:book-reading"} {...others} />);
}

export default Component;

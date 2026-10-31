import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qlx8bac7z.css';
import '../../css/j/jk0js4bbm.css';
import '../../css/d/dabqoibcg.css';
import '../../css/b/be2d89b9t.css';
import '../../css/l/l_fnfsnym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qlx8bac7z wm-shadow"/><path class="jk0js4bbm wm-shadow"/><path class="dabqoibcg"/><path class="be2d89b9t"/><path class="l_fnfsnym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:credit-card"} {...others} />);
}

export default Component;

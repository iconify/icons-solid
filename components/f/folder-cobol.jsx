import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhg495fle.css';
import '../../css/g/gb0t1hblg.css';
import '../../css/j/jje-lsbfh.css';
import '../../css/u/uslwxsbwk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nhg495fle"/><g class="gb0t1hblg"><path class="jje-lsbfh"/><path class="uslwxsbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cobol"} {...others} />);
}

export default Component;

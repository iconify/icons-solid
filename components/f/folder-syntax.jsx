import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f95-ijf-n.css';
import '../../css/v/vriz6s5yi.css';
import '../../css/f/fzb--mpnf.css';
import '../../css/e/e20g_bbpi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f95-ijf-n"/><g class="vriz6s5yi"><path class="fzb--mpnf"/><path class="e20g_bbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-syntax"} {...others} />);
}

export default Component;

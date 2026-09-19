import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u2e6n6bfm.css';
import '../../css/e/eibcigs-u.css';
import '../../css/s/somstlbkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u2e6n6bfm"/><path class="eibcigs-u"/><path class="somstlbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:installing-updates-02"} {...others} />);
}

export default Component;

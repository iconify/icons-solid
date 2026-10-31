import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r852d6k4v.css';
import '../../css/j/j2lt8dwmd.css';
import '../../css/u/ud1lolucm.css';
import '../../css/i/iiyf65bkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r852d6k4v wm-shadow"/><path class="j2lt8dwmd wm-shadow"/><path class="ud1lolucm"/><path class="iiyf65bkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:scan-eye"} {...others} />);
}

export default Component;

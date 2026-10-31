import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/t/tucwttm9e.css';
import '../../css/g/gaep_9bdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="tucwttm9e"/><path class="gaep_9bdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:file-diff"} {...others} />);
}

export default Component;

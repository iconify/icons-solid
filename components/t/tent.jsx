import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gmwlybbaz.css';
import '../../css/w/wylacdb1e.css';
import '../../css/d/da3gmy8zl.css';
import '../../css/t/ta0ef9khb.css';
import '../../css/l/lht6sjihy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gmwlybbaz wm-shadow"/><path class="wm-shadow wylacdb1e"/><path class="da3gmy8zl"/><path class="ta0ef9khb"/><path class="lht6sjihy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:tent"} {...others} />);
}

export default Component;

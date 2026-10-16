import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfo3vbvre.css';
import '../../css/e/e97k-1bwc.css';
import '../../css/c/c5w4qye8l.css';
import '../../css/z/ztfqk7bza.css';
import '../../css/k/kfi_5kxrj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xfo3vbvre"/><path class="e97k-1bwc"/><path class="c5w4qye8l"/><path class="ztfqk7bza"/><path class="kfi_5kxrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:statcom-48"} {...others} />);
}

export default Component;

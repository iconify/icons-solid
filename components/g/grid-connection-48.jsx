import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syc8pyb5a.css';
import '../../css/i/ia80czbys.css';
import '../../css/j/jmjcjlbdg.css';
import '../../css/k/ko7r8rsvb.css';
import '../../css/c/cxti3cbok.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="syc8pyb5a"/><path class="ia80czbys"/><path class="jmjcjlbdg"/><path class="ko7r8rsvb"/><path class="cxti3cbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-connection-48"} {...others} />);
}

export default Component;

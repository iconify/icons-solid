import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo4pizvlt.css';
import '../../css/u/u9pg7sbpc.css';
import '../../css/r/rd5o0ubin.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fo4pizvlt"/><path clip-rule="evenodd" class="u9pg7sbpc"/><path class="rd5o0ubin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:flac-16"} {...others} />);
}

export default Component;

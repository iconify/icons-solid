import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4npesb2t.css';
import '../../css/c/c6fjxyvsa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w4npesb2t"/><path clip-rule="evenodd" class="c6fjxyvsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:award-16"} {...others} />);
}

export default Component;

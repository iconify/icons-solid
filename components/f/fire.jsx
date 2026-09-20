import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcreuacyk.css';
import '../../css/u/ur8upeb-i.css';
import '../../css/b/bpoy8jcsn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kcreuacyk"/><path class="ur8upeb-i"/><path class="bpoy8jcsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fire"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg2fhkbcg.css';
import '../../css/l/l-5p0fbmh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="mg2fhkbcg"/><path clip-rule="evenodd" class="l-5p0fbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:webcam-16"} {...others} />);
}

export default Component;

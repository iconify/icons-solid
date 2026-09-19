import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-r501bai.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b-r501bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:git"} {...others} />);
}

export default Component;

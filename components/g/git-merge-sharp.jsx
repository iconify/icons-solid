import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx5n8lb2i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zx5n8lb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:git-merge-sharp"} {...others} />);
}

export default Component;

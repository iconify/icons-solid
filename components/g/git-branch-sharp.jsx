import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxc1hnbek.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bxc1hnbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:git-branch-sharp"} {...others} />);
}

export default Component;

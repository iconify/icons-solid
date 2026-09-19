import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1k0_9_to.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g1k0_9_to"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:smiley-face"} {...others} />);
}

export default Component;

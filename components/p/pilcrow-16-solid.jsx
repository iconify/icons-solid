import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bde7xsbpa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bde7xsbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:pilcrow-16-solid"} {...others} />);
}

export default Component;

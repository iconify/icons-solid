import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0q5zdfdh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="t0q5zdfdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:video-camera-x-mark-16-solid"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqsh3o3jo.css';
import '../../css/e/e2-a4zbar.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iqsh3o3jo"/><path clip-rule="evenodd" class="e2-a4zbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cpu-chip-16-solid"} {...others} />);
}

export default Component;

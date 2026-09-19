import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nye6a6pnu.css';
import '../../css/j/jez9isbih.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nye6a6pnu"/><path clip-rule="evenodd" class="jez9isbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:camera-16-solid"} {...others} />);
}

export default Component;

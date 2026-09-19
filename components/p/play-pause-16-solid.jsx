import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/deq4hgrol.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="deq4hgrol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:play-pause-16-solid"} {...others} />);
}

export default Component;

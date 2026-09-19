import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo0azpb_h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bo0azpb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:puzzle-piece-16-solid"} {...others} />);
}

export default Component;

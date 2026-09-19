import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zor06vbkg.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zor06vbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:bars-arrow-down-16-solid"} {...others} />);
}

export default Component;

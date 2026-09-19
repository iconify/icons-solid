import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp50m7tvu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tp50m7tvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:shield-check-16-solid"} {...others} />);
}

export default Component;

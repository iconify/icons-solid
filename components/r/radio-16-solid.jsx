import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsp58bb4o.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="jsp58bb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:radio-16-solid"} {...others} />);
}

export default Component;

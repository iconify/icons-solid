import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyh-ry88k.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vyh-ry88k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chevron-up-down-16-solid"} {...others} />);
}

export default Component;

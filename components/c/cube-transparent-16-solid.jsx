import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2f20nb-b.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="n2f20nb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cube-transparent-16-solid"} {...others} />);
}

export default Component;

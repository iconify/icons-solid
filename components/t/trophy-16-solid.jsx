import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr7uqc0zd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nr7uqc0zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:trophy-16-solid"} {...others} />);
}

export default Component;

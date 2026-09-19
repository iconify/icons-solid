import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm277ojsz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nm277ojsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:plus-circle-16-solid"} {...others} />);
}

export default Component;

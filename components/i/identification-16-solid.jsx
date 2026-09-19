import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uiklxfb7z.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="uiklxfb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:identification-16-solid"} {...others} />);
}

export default Component;

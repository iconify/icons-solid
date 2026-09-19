import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd_-5rqcu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wd_-5rqcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:paper-clip-16-solid"} {...others} />);
}

export default Component;

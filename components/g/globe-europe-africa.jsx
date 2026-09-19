import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5am15b5b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u5am15b5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:globe-europe-africa"} {...others} />);
}

export default Component;

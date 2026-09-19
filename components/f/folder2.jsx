import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjv8-gbty.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cjv8-gbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:folder2"} {...others} />);
}

export default Component;

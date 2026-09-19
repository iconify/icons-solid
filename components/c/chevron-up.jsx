import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8ygnl_-i.css';

const viewBox = {"width":1664,"height":1280};
const content = `<path class="e8ygnl_-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:chevron-up"} {...others} />);
}

export default Component;

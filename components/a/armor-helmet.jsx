import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5d7bg7bh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x5d7bg7bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:armor-helmet"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1kzwfi4u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n1kzwfi4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:unwrap-16"} {...others} />);
}

export default Component;

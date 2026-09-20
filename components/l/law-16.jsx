import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2n_s1h7i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l2n_s1h7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:law-16"} {...others} />);
}

export default Component;

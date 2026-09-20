import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr_1l7bfq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kr_1l7bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:fire-extinguisher-solid"} {...others} />);
}

export default Component;

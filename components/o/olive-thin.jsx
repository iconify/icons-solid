import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksj6wuf6w.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="ksj6wuf6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:olive-thin"} {...others} />);
}

export default Component;

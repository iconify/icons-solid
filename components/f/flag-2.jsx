import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa_qoyf3k.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="oa_qoyf3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:flag-2"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9_p7v3fq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b9_p7v3fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:scan-alt"} {...others} />);
}

export default Component;

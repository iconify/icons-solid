import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8p62x6vn.css';
import '../../css/s/stbfr1b_g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k8p62x6vn"/><path class="stbfr1b_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:test-tool"} {...others} />);
}

export default Component;

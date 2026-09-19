import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhmqpzncy.css';
import '../../css/x/xu8t15bjf.css';
import '../../css/z/zboiubcgk.css';
import '../../css/x/xnhmzobai.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bhmqpzncy"/><path class="xu8t15bjf"/><path class="zboiubcgk"/><path class="xnhmzobai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:android-wordmark"} {...others} />);
}

export default Component;

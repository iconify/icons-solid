import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1wxr2brf.css';
import '../../css/x/x6-25tkfl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="q1wxr2brf"/><path class="x6-25tkfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:gold-twotone"} {...others} />);
}

export default Component;

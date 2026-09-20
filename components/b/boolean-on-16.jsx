import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g37t12bqh.css';
import '../../css/h/hbi26vbdh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g37t12bqh"/><path class="hbi26vbdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:boolean-on-16"} {...others} />);
}

export default Component;

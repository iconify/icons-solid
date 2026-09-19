import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn3c1ccis.css';
import '../../css/c/c5ym2eb1u.css';
import '../../css/q/qnvr418yo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vn3c1ccis"/><circle class="c5ym2eb1u"/><path class="qnvr418yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-power-with-vpc"} {...others} />);
}

export default Component;

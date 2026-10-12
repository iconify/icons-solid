import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq1olub4s.css';
import '../../css/q/qtnp7cceo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nq1olub4s"/><path class="qtnp7cceo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cat-20-bold"} {...others} />);
}

export default Component;

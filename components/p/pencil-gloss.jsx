import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4vbq9aig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4vbq9aig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pencil-gloss"} {...others} />);
}

export default Component;

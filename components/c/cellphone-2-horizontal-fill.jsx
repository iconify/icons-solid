import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq3--h1on.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fq3--h1on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cellphone-2-horizontal-fill"} {...others} />);
}

export default Component;

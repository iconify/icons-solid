import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5x_c4b3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q5x_c4b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stroller-gloss"} {...others} />);
}

export default Component;

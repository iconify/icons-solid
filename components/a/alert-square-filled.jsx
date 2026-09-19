import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep8q4pb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ep8q4pb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:alert-square-filled"} {...others} />);
}

export default Component;

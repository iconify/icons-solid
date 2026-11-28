import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3f6o9_to.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3f6o9_to"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:robot-vacuum"} {...others} />);
}

export default Component;

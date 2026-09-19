import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwnw9_bsk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwnw9_bsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:lifebuoy"} {...others} />);
}

export default Component;

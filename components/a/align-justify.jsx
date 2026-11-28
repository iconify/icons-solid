import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra_lr-ray.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ra_lr-ray"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:align-justify"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0sl8tbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0sl8tbyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:credit-card-multiple"} {...others} />);
}

export default Component;

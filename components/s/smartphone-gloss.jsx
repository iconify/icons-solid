import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_6u2bcnv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_6u2bcnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smartphone-gloss"} {...others} />);
}

export default Component;

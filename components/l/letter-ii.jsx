import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq3_z1b5d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fq3_z1b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:letter-ii"} {...others} />);
}

export default Component;

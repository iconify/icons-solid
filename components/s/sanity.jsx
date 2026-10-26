import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wze0azn8y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wze0azn8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:sanity"} {...others} />);
}

export default Component;

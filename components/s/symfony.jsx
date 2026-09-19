import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icf6z6_1x.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="icf6z6_1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:symfony"} {...others} />);
}

export default Component;

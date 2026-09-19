import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl6y03tsx.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="yl6y03tsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:tumblr-square"} {...others} />);
}

export default Component;

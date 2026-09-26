import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk81d1b6s.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jk81d1b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:icinga-wordmark"} {...others} />);
}

export default Component;

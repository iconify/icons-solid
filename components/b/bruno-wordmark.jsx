import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyke8k9iy.css';
import '../../css/n/ng0hn9-bg.css';
import '../../css/b/b9xf7m9kb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hyke8k9iy"/><path class="ng0hn9-bg"/><path class="b9xf7m9kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:bruno-wordmark"} {...others} />);
}

export default Component;

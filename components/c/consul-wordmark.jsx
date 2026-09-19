import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk8f1vb6j.css';
import '../../css/a/ab8l0tjds.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tk8f1vb6j"/><path class="ab8l0tjds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:consul-wordmark"} {...others} />);
}

export default Component;

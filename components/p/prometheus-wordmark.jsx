import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aboskhb3q.css';
import '../../css/h/hie0ikbbu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="aboskhb3q"/><path class="hie0ikbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:prometheus-wordmark"} {...others} />);
}

export default Component;

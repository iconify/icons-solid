import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/m93mi0baz.css';
import '../../css/b/bzahmz7mw.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="m93mi0baz"/><path class="bzahmz7mw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:projector"} {...others} />);
}

export default Component;

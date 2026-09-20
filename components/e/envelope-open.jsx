import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcw8lh66i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xcw8lh66i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:envelope-open"} {...others} />);
}

export default Component;

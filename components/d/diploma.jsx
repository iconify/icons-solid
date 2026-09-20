import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2bylrb9j.css';
import '../../css/i/ijc0stb4c.css';
import '../../css/x/x3n8gwoar.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s2bylrb9j"/><path class="ijc0stb4c"/><path class="x3n8gwoar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:diploma"} {...others} />);
}

export default Component;

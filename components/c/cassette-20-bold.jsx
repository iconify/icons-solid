import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6dd8jb9u.css';
import '../../css/w/w4coxzjvw.css';
import '../../css/u/u3n9vcbth.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l6dd8jb9u"/><path class="w4coxzjvw"/><path class="u3n9vcbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cassette-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxpexwnur.css';
import '../../css/r/rpjhj7j4a.css';

const viewBox = {"width":152,"height":152};
const content = `<path class="fxpexwnur"/><path class="rpjhj7j4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:todoist"} {...others} />);
}

export default Component;

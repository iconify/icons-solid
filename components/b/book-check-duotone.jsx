import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9jvul8en.css';
import '../../css/l/l6a3mob9c.css';
import '../../css/d/d2vzwr-fl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="w9jvul8en"/><path class="l6a3mob9c"/><path class="d2vzwr-fl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:book-check-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm-dbpb1d.css';
import '../../css/j/j9dlgjb4r.css';
import '../../css/e/e-p76g1mi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mm-dbpb1d wm-shadow"/><path class="j9dlgjb4r wm-k"/><path class="e-p76g1mi wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-down"} {...others} />);
}

export default Component;

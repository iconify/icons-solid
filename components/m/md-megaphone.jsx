import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg1osvr1r.css';
import '../../css/p/pgf0clsgf.css';
import '../../css/s/s0rj7obem.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sg1osvr1r"/><path class="pgf0clsgf"/><path class="s0rj7obem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-megaphone"} {...others} />);
}

export default Component;

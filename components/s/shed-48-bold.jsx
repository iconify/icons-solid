import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1z3abb-w.css';
import '../../css/h/h2w2gxl4v.css';
import '../../css/m/mg0mcnb8n.css';
import '../../css/i/i2ko5wydq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h1z3abb-w"/><path class="h2w2gxl4v"/><path class="mg0mcnb8n"/><path class="i2ko5wydq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shed-48-bold"} {...others} />);
}

export default Component;

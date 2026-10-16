import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf0byjgog.css';
import '../../css/n/n183aem4t.css';
import '../../css/j/j8-wilb9p.css';
import '../../css/u/ufvhl4bgl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qf0byjgog"/><path class="n183aem4t"/><path class="j8-wilb9p"/><path class="ufvhl4bgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wheelbarrow-48"} {...others} />);
}

export default Component;

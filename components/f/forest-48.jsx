import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-qhqbb4r.css';
import '../../css/a/a-8x79b-r.css';
import '../../css/o/oxpdu9biv.css';
import '../../css/w/wfx3nk7mg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o-qhqbb4r"/><path class="a-8x79b-r"/><path class="oxpdu9biv"/><path class="wfx3nk7mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forest-48"} {...others} />);
}

export default Component;

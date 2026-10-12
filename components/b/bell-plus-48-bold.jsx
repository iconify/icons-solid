import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_0hu0bwj.css';
import '../../css/d/dt47j_-uq.css';
import '../../css/j/jr7mllb-s.css';
import '../../css/i/iqpkuk7ec.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n_0hu0bwj"/><path class="dt47j_-uq"/><path class="jr7mllb-s"/><path class="iqpkuk7ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-plus-48-bold"} {...others} />);
}

export default Component;

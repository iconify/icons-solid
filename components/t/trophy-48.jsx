import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmeuqkb-h.css';
import '../../css/h/hp4dggb8v.css';
import '../../css/d/dzdrvzb6p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qmeuqkb-h"/><path class="hp4dggb8v"/><path class="dzdrvzb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trophy-48"} {...others} />);
}

export default Component;

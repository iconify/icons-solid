import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8f08ivcr.css';
import '../../css/u/ufzvs3byi.css';
import '../../css/d/d27j7obsk.css';
import '../../css/g/gxxzd4_qb.css';
import '../../css/j/jyfi0eawb.css';
import '../../css/w/wii29dbas.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h8f08ivcr"/><path class="ufzvs3byi"/><path class="d27j7obsk"/><path class="gxxzd4_qb"/><path class="jyfi0eawb"/><path class="wii29dbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-plus-48-bold"} {...others} />);
}

export default Component;

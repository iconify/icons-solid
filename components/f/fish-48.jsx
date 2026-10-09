import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohpbt_2nc.css';
import '../../css/h/h5dbk_bhj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ohpbt_2nc"/><path class="h5dbk_bhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fish-48"} {...others} />);
}

export default Component;

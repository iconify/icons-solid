import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onr3s4yih.css';
import '../../css/v/vc5zz0hzs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="onr3s4yih"/><path class="vc5zz0hzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-48-bold"} {...others} />);
}

export default Component;

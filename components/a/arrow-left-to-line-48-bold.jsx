import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xexqeacnw.css';
import '../../css/m/mpc5lgr0k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xexqeacnw"/><path class="mpc5lgr0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-to-line-48-bold"} {...others} />);
}

export default Component;

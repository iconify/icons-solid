import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghe6iqpty.css';
import '../../css/f/fqoptnsed.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ghe6iqpty"/><path class="fqoptnsed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-waterfall-48-bold"} {...others} />);
}

export default Component;

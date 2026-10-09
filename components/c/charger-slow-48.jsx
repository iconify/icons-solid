import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x21ra5bou.css';
import '../../css/c/cdhxuqb1b.css';
import '../../css/r/r94vwub7p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x21ra5bou"/><path class="cdhxuqb1b"/><path class="r94vwub7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-slow-48"} {...others} />);
}

export default Component;

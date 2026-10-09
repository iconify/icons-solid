import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0at87b5x.css';
import '../../css/e/esgmmdbyu.css';
import '../../css/e/e4bwz0btd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m0at87b5x"/><path class="esgmmdbyu"/><path class="e4bwz0btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:window-48-bold"} {...others} />);
}

export default Component;

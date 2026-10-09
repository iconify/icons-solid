import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vphieacec.css';
import '../../css/q/qt2dups9g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vphieacec"/><path class="qt2dups9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-rod-48"} {...others} />);
}

export default Component;

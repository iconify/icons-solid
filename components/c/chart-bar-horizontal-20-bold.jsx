import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iztj1m4kj.css';
import '../../css/m/mr6auulay.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iztj1m4kj"/><path class="mr6auulay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-horizontal-20-bold"} {...others} />);
}

export default Component;

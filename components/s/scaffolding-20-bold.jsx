import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7djkybhz.css';
import '../../css/e/e8i4n37kj.css';
import '../../css/z/z0ps7ybaj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l7djkybhz"/><path class="e8i4n37kj"/><path class="z0ps7ybaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scaffolding-20-bold"} {...others} />);
}

export default Component;

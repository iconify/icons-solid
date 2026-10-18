import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zct-ewbsx.css';
import '../../css/i/i2xf5kbgn.css';
import '../../css/c/cx989p37d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zct-ewbsx"/><path class="i2xf5kbgn"/><path class="cx989p37d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hi-vis-vest-48-bold"} {...others} />);
}

export default Component;

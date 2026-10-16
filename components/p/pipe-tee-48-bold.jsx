import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7znocbrd.css';
import '../../css/e/e2r4n70kq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z7znocbrd"/><path class="e2r4n70kq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-tee-48-bold"} {...others} />);
}

export default Component;

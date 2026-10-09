import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqzirr-9x.css';
import '../../css/y/y8ad7wc8w.css';
import '../../css/r/rub25_bgh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zqzirr-9x"/><path class="y8ad7wc8w"/><path class="rub25_bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:salt-cavern-48-bold"} {...others} />);
}

export default Component;

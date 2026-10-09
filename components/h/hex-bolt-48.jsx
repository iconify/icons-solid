import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdykscxue.css';
import '../../css/s/sm0cfybmw.css';
import '../../css/e/euxfqgbhs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gdykscxue"/><path class="sm0cfybmw"/><path class="euxfqgbhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hex-bolt-48"} {...others} />);
}

export default Component;

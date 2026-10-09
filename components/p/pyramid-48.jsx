import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3kwf5bnk.css';
import '../../css/o/osinw2bal.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u3kwf5bnk"/><path class="osinw2bal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pyramid-48"} {...others} />);
}

export default Component;

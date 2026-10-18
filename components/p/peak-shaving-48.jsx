import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1e_f5blg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u1e_f5blg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:peak-shaving-48"} {...others} />);
}

export default Component;

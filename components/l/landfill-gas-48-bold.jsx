import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6wqg-hrr.css';
import '../../css/c/ch_p76tdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s6wqg-hrr"/><path class="ch_p76tdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:landfill-gas-48-bold"} {...others} />);
}

export default Component;

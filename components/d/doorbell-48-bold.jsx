import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_zpkg6wi.css';
import '../../css/u/uwggcevzf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o_zpkg6wi"/><path class="uwggcevzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:doorbell-48-bold"} {...others} />);
}

export default Component;

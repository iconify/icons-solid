import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li444abjk.css';
import '../../css/o/o7h961gwp.css';
import '../../css/v/vmrjjfc0h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="li444abjk"/><path class="o7h961gwp"/><path class="vmrjjfc0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screw-48-bold"} {...others} />);
}

export default Component;

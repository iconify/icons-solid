import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-vml9bmf.css';
import '../../css/j/j8fkx09kt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z-vml9bmf"/><path class="j8fkx09kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:interconnector-48"} {...others} />);
}

export default Component;

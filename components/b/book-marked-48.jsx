import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajqks0bek.css';
import '../../css/d/d7497htpz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ajqks0bek"/><path class="d7497htpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:book-marked-48"} {...others} />);
}

export default Component;

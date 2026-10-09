import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d98iimw6f.css';
import '../../css/j/j9vmdbqgp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d98iimw6f"/><path class="j9vmdbqgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:croissant-48-bold"} {...others} />);
}

export default Component;

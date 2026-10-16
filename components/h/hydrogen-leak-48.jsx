import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u43i3jb2i.css';
import '../../css/c/c9_dz4bmi.css';
import '../../css/m/m7e0bqrrb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u43i3jb2i"/><path class="c9_dz4bmi"/><path class="m7e0bqrrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-leak-48"} {...others} />);
}

export default Component;

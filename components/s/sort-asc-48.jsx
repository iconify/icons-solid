import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unqzfdcpy.css';
import '../../css/p/pqf5v6bke.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="unqzfdcpy"/><path class="pqf5v6bke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-asc-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u_cedqbzi.css';
import '../../css/e/eh4tp1lib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u_cedqbzi"/><path class="eh4tp1lib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-symlink"} {...others} />);
}

export default Component;

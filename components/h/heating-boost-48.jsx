import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-obboe6z.css';
import '../../css/u/u2ghli_7a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k-obboe6z"/><path class="u2ghli_7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heating-boost-48"} {...others} />);
}

export default Component;

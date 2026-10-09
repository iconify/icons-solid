import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0z0h0l9r.css';
import '../../css/n/n3dvw-bko.css';
import '../../css/t/tuurkcb0h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f0z0h0l9r"/><path class="n3dvw-bko"/><path class="tuurkcb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cocktail-48-bold"} {...others} />);
}

export default Component;

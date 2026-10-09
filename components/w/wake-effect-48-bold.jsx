import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp0dme4mw.css';
import '../../css/r/r1718n6ef.css';
import '../../css/z/z2svp9beb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hp0dme4mw"/><path class="r1718n6ef"/><path class="z2svp9beb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wake-effect-48-bold"} {...others} />);
}

export default Component;

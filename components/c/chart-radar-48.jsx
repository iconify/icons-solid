import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8dejactp.css';
import '../../css/y/ya6awqbqs.css';
import '../../css/z/z9ltojktb.css';
import '../../css/l/lcws11x4n.css';
import '../../css/a/ab821ijmx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j8dejactp"/><path class="ya6awqbqs"/><path class="z9ltojktb"/><path class="lcws11x4n"/><path class="ab821ijmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-radar-48"} {...others} />);
}

export default Component;

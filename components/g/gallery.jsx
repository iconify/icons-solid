import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9f6yvbrf.css';
import '../../css/v/vz0l4obzi.css';
import '../../css/j/jn9q8ebru.css';
import '../../css/e/e4d6ii9hp.css';
import '../../css/f/fajziooat.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t9f6yvbrf"/><path class="vz0l4obzi"/><circle class="jn9q8ebru"/><path class="e4d6ii9hp"/><path class="fajziooat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:gallery"} {...others} />);
}

export default Component;

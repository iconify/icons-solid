import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvn4mfbec.css';
import '../../css/l/lahmkil_a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gvn4mfbec"/><path class="lahmkil_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:acorn-48"} {...others} />);
}

export default Component;

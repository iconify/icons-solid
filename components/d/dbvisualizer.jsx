import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-k0yub0q.css';
import '../../css/t/tyr-cab1g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="r-k0yub0q"/><path class="tyr-cab1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dbvisualizer"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg57_081g.css';
import '../../css/a/an7n-_bwo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xg57_081g"/><path class="an7n-_bwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:babel"} {...others} />);
}

export default Component;

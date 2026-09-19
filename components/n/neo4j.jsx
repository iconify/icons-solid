import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkwtqebyl.css';
import '../../css/h/h08ulmihp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dkwtqebyl"/><path class="h08ulmihp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:neo4j"} {...others} />);
}

export default Component;

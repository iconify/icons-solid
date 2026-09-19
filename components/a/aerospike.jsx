import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov8y93bhm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ov8y93bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:aerospike"} {...others} />);
}

export default Component;

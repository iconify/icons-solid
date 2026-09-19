import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfqbxj_2g.css';

const viewBox = {"width":472,"height":408};
const content = `<path class="mfqbxj_2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:alert-triangle"} {...others} />);
}

export default Component;

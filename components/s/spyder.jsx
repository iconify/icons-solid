import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dutclc24h.css';
import '../../css/x/x5f34xbxd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dutclc24h"/><path class="x5f34xbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:spyder"} {...others} />);
}

export default Component;

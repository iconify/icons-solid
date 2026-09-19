import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9xb2qb7w.css';
import '../../css/g/gdngdpbdd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="y9xb2qb7w"/><path class="gdngdpbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:arduino"} {...others} />);
}

export default Component;

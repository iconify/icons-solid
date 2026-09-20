import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5v0c1bnd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o5v0c1bnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:modrinth-dark"} {...others} />);
}

export default Component;

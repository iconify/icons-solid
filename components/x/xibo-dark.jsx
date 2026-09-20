import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf-_vsrid.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uf-_vsrid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:xibo-dark"} {...others} />);
}

export default Component;

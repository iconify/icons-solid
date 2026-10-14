import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdrk0t4mo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cdrk0t4mo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fromkai-light"} {...others} />);
}

export default Component;

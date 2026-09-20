import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vj7ba9y9x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vj7ba9y9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filameter-light"} {...others} />);
}

export default Component;

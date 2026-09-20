import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb2ayacaz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rb2ayacaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:2fauth-dark"} {...others} />);
}

export default Component;

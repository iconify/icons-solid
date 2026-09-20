import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs6zkkb6h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xs6zkkb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:deployrr-dark"} {...others} />);
}

export default Component;

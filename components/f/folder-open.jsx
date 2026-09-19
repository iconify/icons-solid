import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acp9e5g1h.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="acp9e5g1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:folder-open"} {...others} />);
}

export default Component;

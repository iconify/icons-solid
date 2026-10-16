import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-y9qh32h.css';
import '../../css/z/zcvqqxblp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g-y9qh32h"/><path class="zcvqqxblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:glacier-48"} {...others} />);
}

export default Component;

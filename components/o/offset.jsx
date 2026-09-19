import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phjcr-75y.css';
import '../../css/i/iqsh6wb7i.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="phjcr-75y"/><path class="iqsh6wb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:offset"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv90ixbeh.css';

const viewBox = {"width":956.693,"height":342.992};
const content = `<path class="bv90ixbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tata-consultancy-services-legacy"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2uf_k-ed.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="r2uf_k-ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:person-walking-luggage"} {...others} />);
}

export default Component;

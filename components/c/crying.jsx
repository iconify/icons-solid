import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzwd2419d.css';
import '../../css/g/gqvnp8-qj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lzwd2419d"/><path class="gqvnp8-qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:crying"} {...others} />);
}

export default Component;

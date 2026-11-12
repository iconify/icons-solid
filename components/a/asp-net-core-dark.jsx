import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8csb0gic.css';
import '../../css/m/m3dery5fx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l8csb0gic"/><path class="m3dery5fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:asp-net-core-dark"} {...others} />);
}

export default Component;

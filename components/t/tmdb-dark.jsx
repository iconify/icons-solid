import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgw5xlb2o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qgw5xlb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tmdb-dark"} {...others} />);
}

export default Component;

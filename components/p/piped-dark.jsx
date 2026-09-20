import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f09tprafk.css';
import '../../css/u/ug7q-clry.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f09tprafk"/><path class="ug7q-clry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:piped-dark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tne80_bgq.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="tne80_bgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:measure-area-alt"} {...others} />);
}

export default Component;

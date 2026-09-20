import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrnwgv0ox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrnwgv0ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:map-marker-plus"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_crs_o9b.css';

const viewBox = {"width":59,"height":59,"left":582,"top":232.67};
const content = `<path class="s_crs_o9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lumin-dark"} {...others} />);
}

export default Component;

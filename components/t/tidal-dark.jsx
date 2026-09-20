import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co5zxf4is.css';

const viewBox = {"width":1001,"height":667};
const content = `<path class="co5zxf4is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tidal-dark"} {...others} />);
}

export default Component;

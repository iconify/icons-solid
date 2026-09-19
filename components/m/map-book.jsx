import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-06qbclg.css';
import '../../css/r/ryca0qb-r.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="c-06qbclg"/><path class="ryca0qb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-book"} {...others} />);
}

export default Component;

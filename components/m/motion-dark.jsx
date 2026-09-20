import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jarw_gnfr.css';

const viewBox = {"width":1103,"height":386};
const content = `<path class="jarw_gnfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:motion-dark"} {...others} />);
}

export default Component;

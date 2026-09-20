import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rspr33bfr.css';

const viewBox = {"width":1534,"height":1534};
const content = `<path class="rspr33bfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wisetech-global-light"} {...others} />);
}

export default Component;

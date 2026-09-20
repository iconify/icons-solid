import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amc34abky.css';

const viewBox = {"width":1534,"height":1534};
const content = `<path class="amc34abky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wisetech-global-dark"} {...others} />);
}

export default Component;

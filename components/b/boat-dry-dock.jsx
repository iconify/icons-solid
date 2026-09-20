import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/refuwn1eq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="refuwn1eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:boat-dry-dock"} {...others} />);
}

export default Component;

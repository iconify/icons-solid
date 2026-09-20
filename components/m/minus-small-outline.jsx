import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe8a6zxhy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xe8a6zxhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:minus-small-outline"} {...others} />);
}

export default Component;

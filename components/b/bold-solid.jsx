import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5-6mmbvw.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="m5-6mmbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bold-solid"} {...others} />);
}

export default Component;

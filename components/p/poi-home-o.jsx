import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsnsd8bak.css';
import '../../css/m/mce3-1bax.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="rsnsd8bak"/><path class="mce3-1bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:poi-home-o"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsi6l9whp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dsi6l9whp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:aerial-cargo-lift"} {...others} />);
}

export default Component;

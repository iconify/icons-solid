import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfb3mwb9k.css';
import '../../css/x/xfufrwivn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dfb3mwb9k"/><path class="xfufrwivn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-data-file-bars"} {...others} />);
}

export default Component;

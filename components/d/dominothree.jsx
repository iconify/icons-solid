import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf4c-9c0j.css';

const viewBox = {"width":961,"height":960};
const content = `<path class="zf4c-9c0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:dominothree"} {...others} />);
}

export default Component;

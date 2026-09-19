import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y28ds_u5j.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="y28ds_u5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:four-duo"} {...others} />);
}

export default Component;

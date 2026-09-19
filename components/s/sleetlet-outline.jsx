import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnt5_6bkg.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="hnt5_6bkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sleetlet-outline"} {...others} />);
}

export default Component;

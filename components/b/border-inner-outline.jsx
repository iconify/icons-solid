import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxc2vnb9a.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="dxc2vnb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-inner-outline"} {...others} />);
}

export default Component;

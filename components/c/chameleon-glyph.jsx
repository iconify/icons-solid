import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzthl2mbc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tzthl2mbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:chameleon-glyph"} {...others} />);
}

export default Component;

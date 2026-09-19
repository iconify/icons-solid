import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acxe7qz5s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="acxe7qz5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:light-bulb"} {...others} />);
}

export default Component;

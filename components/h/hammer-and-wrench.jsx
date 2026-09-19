import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s392k2bak.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s392k2bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:hammer-and-wrench"} {...others} />);
}

export default Component;

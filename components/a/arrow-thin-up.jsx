import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfta2whtq.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="gfta2whtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:arrow-thin-up"} {...others} />);
}

export default Component;

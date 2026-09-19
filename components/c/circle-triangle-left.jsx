import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxajylj6q.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="jxajylj6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:circle-triangle-left"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bon4xeh_b.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="bon4xeh_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:laptop-outline"} {...others} />);
}

export default Component;

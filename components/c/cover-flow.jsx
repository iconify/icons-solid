import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/famlpk19j.css';

const viewBox = {"width":17,"height":17};
const content = `<path class="famlpk19j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cover-flow"} {...others} />);
}

export default Component;

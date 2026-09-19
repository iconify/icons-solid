import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elwo7ac8f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="elwo7ac8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:smiley-fill-16"} {...others} />);
}

export default Component;

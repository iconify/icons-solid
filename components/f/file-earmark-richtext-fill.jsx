import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmx57fb3h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cmx57fb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-earmark-richtext-fill"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syeeeyb_b.css';

const viewBox = {"width":64,"height":64};
const content = `<path clip-rule="evenodd" class="syeeeyb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dub-dark"} {...others} />);
}

export default Component;

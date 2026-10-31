import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1nrsbcrn.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="a1nrsbcrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:bars-3-bottom-center-20-solid"} {...others} />);
}

export default Component;

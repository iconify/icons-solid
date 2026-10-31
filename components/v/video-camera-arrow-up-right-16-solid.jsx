import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzdv_vtcl.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bzdv_vtcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:video-camera-arrow-up-right-16-solid"} {...others} />);
}

export default Component;

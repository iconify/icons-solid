import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amsw93bpr.css';

const viewBox = {"width":32,"height":32};
const content = `<path clip-rule="evenodd" class="amsw93bpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:periscope"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovg9qx-rh.css';
import '../../css/i/iz8c3l5-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovg9qx-rh"/><path class="iz8c3l5-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-search-duotone"} {...others} />);
}

export default Component;

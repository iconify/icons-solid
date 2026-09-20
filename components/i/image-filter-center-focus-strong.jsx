import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfxy0ht-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfxy0ht-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:image-filter-center-focus-strong"} {...others} />);
}

export default Component;

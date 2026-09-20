import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx3h3z0iu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx3h3z0iu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:cloud-storage-outline"} {...others} />);
}

export default Component;

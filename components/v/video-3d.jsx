import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buzb721ut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="buzb721ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:video-3d"} {...others} />);
}

export default Component;

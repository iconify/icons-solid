import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz-2pjmdm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xz-2pjmdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:incognito"} {...others} />);
}

export default Component;

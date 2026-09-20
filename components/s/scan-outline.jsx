import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iblk2mb0y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iblk2mb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:scan-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9pkgxbie.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p9pkgxbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:google-drive-outline"} {...others} />);
}

export default Component;

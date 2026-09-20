import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh620fbwj.css';
import '../../css/d/dcd3u2sfd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rh620fbwj"/><path clip-rule="evenodd" class="dcd3u2sfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:navigation-compass-16"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae6uv7dgk.css';
import '../../css/b/bkulhccha.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ae6uv7dgk"/><path class="bkulhccha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:care-staff-area"} {...others} />);
}

export default Component;

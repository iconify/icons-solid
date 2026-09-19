import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqu9abbwj.css';
import '../../css/m/m1t94ydqt.css';
import '../../css/a/auiy-wsxq.css';
import '../../css/y/yevfxzbxn.css';
import '../../css/i/i9rlg9tan.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="oqu9abbwj"/><circle class="m1t94ydqt"/><circle class="auiy-wsxq"/><path class="yevfxzbxn"/><path class="i9rlg9tan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:web-security-scanner"} {...others} />);
}

export default Component;

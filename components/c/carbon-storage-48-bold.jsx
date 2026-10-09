import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odlpk9b9a.css';
import '../../css/q/qxkvmlb6f.css';
import '../../css/v/vj-jo02il.css';
import '../../css/q/qrv6rjbow.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="odlpk9b9a"/><path class="qxkvmlb6f"/><path class="vj-jo02il"/><path class="qrv6rjbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-storage-48-bold"} {...others} />);
}

export default Component;

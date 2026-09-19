import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okximigwt.css';
import '../../css/d/dlp7nstpk.css';
import '../../css/a/avvjpobem.css';
import '../../css/c/cr9nds-9e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="okximigwt"/><circle class="dlp7nstpk"/><path class="avvjpobem"/><path class="cr9nds-9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:server-time"} {...others} />);
}

export default Component;

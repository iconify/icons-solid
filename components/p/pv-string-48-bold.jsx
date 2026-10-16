import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1tv20y9u.css';
import '../../css/j/j3zy8xb9d.css';
import '../../css/x/xxdwupioq.css';
import '../../css/j/j3cfwsblv.css';
import '../../css/p/p0hgombej.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u1tv20y9u"/><path class="j3zy8xb9d"/><path class="xxdwupioq"/><path class="j3cfwsblv"/><path class="p0hgombej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pv-string-48-bold"} {...others} />);
}

export default Component;

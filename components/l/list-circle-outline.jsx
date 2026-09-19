import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scd922beo.css';
import '../../css/r/rsyv-4sjc.css';
import '../../css/a/aqo8lubpi.css';
import '../../css/x/x7qr8mbdd.css';
import '../../css/g/gp2g9ybnh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="scd922beo"/><path class="rsyv-4sjc"/><circle class="aqo8lubpi"/><circle class="x7qr8mbdd"/><circle class="gp2g9ybnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:list-circle-outline"} {...others} />);
}

export default Component;

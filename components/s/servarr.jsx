import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loar4lb6y.css';
import '../../css/s/ssyq7c48j.css';
import '../../css/w/wyzkygbfw.css';
import '../../css/b/bt5h53nxb.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="loar4lb6y"/><path class="ssyq7c48j"/><path class="wyzkygbfw"/><path class="bt5h53nxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:servarr"} {...others} />);
}

export default Component;

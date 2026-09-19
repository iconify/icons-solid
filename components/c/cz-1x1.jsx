import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qndo5pb1f.css';
import '../../css/g/gi1zq4blx.css';
import '../../css/d/doic5013b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qndo5pb1f"/><path class="gi1zq4blx"/><path class="doic5013b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cz-1x1"} {...others} />);
}

export default Component;

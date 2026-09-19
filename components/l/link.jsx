import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pihk1kufz.css';
import '../../css/n/n9_obdcgu.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="pihk1kufz"/><path class="n9_obdcgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:link"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww8idsbap.css';
import '../../css/e/ez22n4eor.css';
import '../../css/l/lzt9bkbza.css';
import '../../css/h/hhsvjg6qz.css';
import '../../css/n/n7h3t2d2d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ww8idsbap"/><path class="ez22n4eor"/><path class="lzt9bkbza"/><path class="hhsvjg6qz"/><path class="n7h3t2d2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reaparr"} {...others} />);
}

export default Component;

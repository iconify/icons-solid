import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4yb1lblo.css';
import '../../css/v/vyuq6bchh.css';
import '../../css/l/lnelmrbrq.css';
import '../../css/d/d0kvbdtzz.css';
import '../../css/p/pjn7sbb0g.css';
import '../../css/n/n1m5hcctc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="o4yb1lblo"/><circle class="vyuq6bchh"/><circle class="lnelmrbrq"/><path class="d0kvbdtzz"/><path class="pjn7sbb0g"/><path class="n1m5hcctc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-list"} {...others} />);
}

export default Component;

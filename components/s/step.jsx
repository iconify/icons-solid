import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbg9oxr8c.css';
import '../../css/n/nwct4ibmb.css';
import '../../css/o/oy4a092ku.css';
import '../../css/k/kjjvokfuw.css';
import '../../css/o/ow6ackbzj.css';
import '../../css/x/xr9op0bap.css';
import '../../css/q/qrhg-1bgy.css';
import '../../css/t/tgfr9hbym.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bbg9oxr8c"/><path class="nwct4ibmb"/><path class="oy4a092ku"/><path class="kjjvokfuw"/><path class="ow6ackbzj"/><path class="xr9op0bap"/><path class="qrhg-1bgy"/><path class="tgfr9hbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:step"} {...others} />);
}

export default Component;

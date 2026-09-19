import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpiteb51d.css';
import '../../css/v/v23tyc59y.css';
import '../../css/b/bfox5ubnm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qpiteb51d"/><circle class="v23tyc59y"/><path class="bfox5ubnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tour"} {...others} />);
}

export default Component;

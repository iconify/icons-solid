import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqr0zm-hq.css';
import '../../css/n/n2x5xwbjj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bqr0zm-hq"/><path class="n2x5xwbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dosvault-light"} {...others} />);
}

export default Component;

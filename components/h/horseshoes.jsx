import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpc-6mina.css';
import '../../css/x/xczq1jt6l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lpc-6mina"/><path class="xczq1jt6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:horseshoes"} {...others} />);
}

export default Component;

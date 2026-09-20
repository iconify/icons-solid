import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzyv8xbll.css';
import '../../css/t/t8atr7bby.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tzyv8xbll"/><path class="t8atr7bby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:hearing-aid"} {...others} />);
}

export default Component;

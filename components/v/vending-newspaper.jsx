import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/attlt2bak.css';
import '../../css/w/w5pegf6wk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="attlt2bak"/><path class="w5pegf6wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:vending-newspaper"} {...others} />);
}

export default Component;

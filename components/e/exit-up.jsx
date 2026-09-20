import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln0oe0zwr.css';
import '../../css/c/crznqgb3v.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="ln0oe0zwr"/><path class="crznqgb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:exit-up"} {...others} />);
}

export default Component;

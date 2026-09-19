import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4ll1_buo.css';
import '../../css/v/vd6phjbuv.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="e4ll1_buo"/><path class="vd6phjbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:top-right"} {...others} />);
}

export default Component;

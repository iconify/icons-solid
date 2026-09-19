import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1ch9w2el.css';
import '../../css/n/n4n5f992h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w1ch9w2el"/><path class="n4n5f992h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:settings-edit"} {...others} />);
}

export default Component;

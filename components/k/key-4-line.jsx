import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgz7o1bwh.css';
import '../../css/a/atikj6bha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lgz7o1bwh"/><circle class="atikj6bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:key-4-line"} {...others} />);
}

export default Component;

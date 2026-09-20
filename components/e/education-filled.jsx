import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dae8fsb4j.css';
import '../../css/e/e3_9xhb7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dae8fsb4j"/><path class="e3_9xhb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:education-filled"} {...others} />);
}

export default Component;

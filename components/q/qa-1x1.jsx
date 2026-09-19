import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8nalnb6j.css';
import '../../css/z/z89mqybmm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o8nalnb6j"/><path class="z89mqybmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:qa-1x1"} {...others} />);
}

export default Component;

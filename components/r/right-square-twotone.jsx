import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc8-4tb2b.css';
import '../../css/u/upuox6bpg.css';
import '../../css/g/g-n25fwzg.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gc8-4tb2b"/><path class="upuox6bpg"/><path class="g-n25fwzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:right-square-twotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyz7sxb6l.css';
import '../../css/o/os103abfd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yyz7sxb6l"/><path class="os103abfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:volume-off-stroke-20"} {...others} />);
}

export default Component;

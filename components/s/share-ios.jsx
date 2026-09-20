import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5n8ghm7o.css';
import '../../css/w/wq_f_lb3v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s5n8ghm7o"/><path class="wq_f_lb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:share-ios"} {...others} />);
}

export default Component;

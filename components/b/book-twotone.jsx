import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kopjo4b-r.css';
import '../../css/h/hp5x7vfmy.css';
import '../../css/x/xbsqhfb2a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="kopjo4b-r"/><path class="hp5x7vfmy"/><path class="xbsqhfb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:book-twotone"} {...others} />);
}

export default Component;

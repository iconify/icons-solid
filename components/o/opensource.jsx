import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnki2-boj.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="hnki2-boj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:opensource"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi1n5xsqq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hi1n5xsqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:house"} {...others} />);
}

export default Component;

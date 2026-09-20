import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk0b5pbgk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bk0b5pbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:heart"} {...others} />);
}

export default Component;

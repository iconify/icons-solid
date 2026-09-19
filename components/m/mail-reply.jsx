import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czbj6bb-q.css';
import '../../css/r/rioz_6b_m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="czbj6bb-q"/><path class="rioz_6b_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mail-reply"} {...others} />);
}

export default Component;

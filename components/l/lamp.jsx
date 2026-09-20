import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-3m0x4_p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l-3m0x4_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:lamp"} {...others} />);
}

export default Component;

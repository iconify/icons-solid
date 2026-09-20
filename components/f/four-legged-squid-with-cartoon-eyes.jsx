import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-7487brk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p-7487brk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:four-legged-squid-with-cartoon-eyes"} {...others} />);
}

export default Component;

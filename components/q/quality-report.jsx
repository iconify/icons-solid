import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-mv4pbuu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p-mv4pbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:quality-report"} {...others} />);
}

export default Component;

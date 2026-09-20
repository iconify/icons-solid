import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1af_ob0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s1af_ob0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-open"} {...others} />);
}

export default Component;

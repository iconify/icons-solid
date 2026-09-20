import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bunby8b1u.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bunby8b1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:justice-scale-2"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmj5g9btx.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="lmj5g9btx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:viewfile"} {...others} />);
}

export default Component;

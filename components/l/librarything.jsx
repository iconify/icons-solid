import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q19f3yg1i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q19f3yg1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:librarything"} {...others} />);
}

export default Component;

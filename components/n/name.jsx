import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de2p3kbbo.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="de2p3kbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:name"} {...others} />);
}

export default Component;

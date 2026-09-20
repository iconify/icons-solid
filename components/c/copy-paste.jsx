import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1lo6xjdi.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="y1lo6xjdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:copy-paste"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-vp4jbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-vp4jbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:file-pdf-24"} {...others} />);
}

export default Component;

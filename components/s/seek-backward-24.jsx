import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yq3z-t4xl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yq3z-t4xl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:seek-backward-24"} {...others} />);
}

export default Component;

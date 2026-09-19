import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi4d1ebgc.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="yi4d1ebgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:kubernetes"} {...others} />);
}

export default Component;

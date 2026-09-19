import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2axqqb4p.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="z2axqqb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:broccoli"} {...others} />);
}

export default Component;

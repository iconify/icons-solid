import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-0xczbbt.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="z-0xczbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:os2"} {...others} />);
}

export default Component;

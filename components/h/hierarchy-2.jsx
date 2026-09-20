import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ueipv7ldy.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ueipv7ldy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hierarchy-2"} {...others} />);
}

export default Component;

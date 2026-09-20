import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9kn9pbtw.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="t9kn9pbtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:share-alt-filled"} {...others} />);
}

export default Component;

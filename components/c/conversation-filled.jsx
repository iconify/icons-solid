import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk6089bek.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="bk6089bek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:conversation-filled"} {...others} />);
}

export default Component;

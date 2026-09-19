import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b51e4wr8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b51e4wr8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:notification-new-filled"} {...others} />);
}

export default Component;

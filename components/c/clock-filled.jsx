import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb7jnqo6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gb7jnqo6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:clock-filled"} {...others} />);
}

export default Component;

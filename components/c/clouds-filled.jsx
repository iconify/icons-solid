import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9j6jnqno.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u9j6jnqno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:clouds-filled"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9g9e5wbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c9g9e5wbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:wallet-alt-03-filled"} {...others} />);
}

export default Component;

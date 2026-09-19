import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c89kj1afa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c89kj1afa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:user-email"} {...others} />);
}

export default Component;

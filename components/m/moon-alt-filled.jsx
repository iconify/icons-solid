import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzr7y9y0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vzr7y9y0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:moon-alt-filled"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_koqb62k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s_koqb62k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tooth-gum"} {...others} />);
}

export default Component;

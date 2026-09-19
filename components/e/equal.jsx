import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzk6nkboq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rzk6nkboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:equal"} {...others} />);
}

export default Component;

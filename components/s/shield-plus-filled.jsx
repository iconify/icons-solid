import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhrz9cckz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mhrz9cckz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:shield-plus-filled"} {...others} />);
}

export default Component;

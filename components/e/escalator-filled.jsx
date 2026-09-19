import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_4g8ix3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_4g8ix3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:escalator-filled"} {...others} />);
}

export default Component;

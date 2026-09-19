import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx20v6byn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tx20v6byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:home-alt-01-filled"} {...others} />);
}

export default Component;

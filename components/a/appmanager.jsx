import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/te1jx8dgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="te1jx8dgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:appmanager"} {...others} />);
}

export default Component;

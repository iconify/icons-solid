import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xatgpdb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xatgpdb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:egg-cracked-filled"} {...others} />);
}

export default Component;

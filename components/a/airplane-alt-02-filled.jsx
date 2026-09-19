import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asnfbccsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="asnfbccsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:airplane-alt-02-filled"} {...others} />);
}

export default Component;

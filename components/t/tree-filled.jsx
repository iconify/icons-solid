import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1-c0l79h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1-c0l79h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tree-filled"} {...others} />);
}

export default Component;

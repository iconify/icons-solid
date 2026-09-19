import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5yu_ebut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5yu_ebut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:city-alt-filled"} {...others} />);
}

export default Component;

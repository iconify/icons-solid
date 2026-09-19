import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi3p-9b8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fi3p-9b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:clear-formatting"} {...others} />);
}

export default Component;

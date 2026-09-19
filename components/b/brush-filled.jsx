import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8l-jmhst.css';
import '../../css/v/vqw6mobct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i8l-jmhst"/><path class="vqw6mobct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:brush-filled"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o10ka4bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o10ka4bnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:keyboard-solid"} {...others} />);
}

export default Component;

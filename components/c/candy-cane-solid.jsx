import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0n876bqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f0n876bqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-cane-solid"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf0x6_f6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jf0x6_f6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:archive-arrow-up"} {...others} />);
}

export default Component;

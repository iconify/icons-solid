import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2-x-cbeh.css';
import '../../css/f/fhhc7bnyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j2-x-cbeh"/><path class="fhhc7bnyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-3x2-bold-duotone"} {...others} />);
}

export default Component;

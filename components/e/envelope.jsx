import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afdq6s1fz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="afdq6s1fz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:envelope"} {...others} />);
}

export default Component;

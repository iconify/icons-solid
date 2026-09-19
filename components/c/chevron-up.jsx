import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smg3t6jju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smg3t6jju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:chevron-up"} {...others} />);
}

export default Component;

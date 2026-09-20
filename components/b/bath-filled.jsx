import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryzr5jw8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryzr5jw8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bath-filled"} {...others} />);
}

export default Component;

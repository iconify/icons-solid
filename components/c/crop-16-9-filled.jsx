import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rns8vj0tv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rns8vj0tv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:crop-16-9-filled"} {...others} />);
}

export default Component;

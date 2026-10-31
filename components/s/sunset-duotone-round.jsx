import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c180_r4qr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c180_r4qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sunset-duotone-round"} {...others} />);
}

export default Component;

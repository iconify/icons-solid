import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4brlnqpx.css';
import '../../css/b/bpeho1s8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4brlnqpx"/><path class="bpeho1s8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-arrow-down-bold-duotone"} {...others} />);
}

export default Component;

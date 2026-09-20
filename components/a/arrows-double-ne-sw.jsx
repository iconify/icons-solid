import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rts2wrb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rts2wrb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-double-ne-sw"} {...others} />);
}

export default Component;

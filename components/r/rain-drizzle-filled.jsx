import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si-i9tb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="si-i9tb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:rain-drizzle-filled"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2ds8_m2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q2ds8_m2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:shopping-basket-off-filled"} {...others} />);
}

export default Component;

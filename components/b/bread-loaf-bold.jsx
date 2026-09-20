import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb7he3brl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mb7he3brl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bread-loaf-bold"} {...others} />);
}

export default Component;

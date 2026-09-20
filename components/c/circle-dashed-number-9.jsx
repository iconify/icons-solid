import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/homhz8bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="homhz8bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-dashed-number-9"} {...others} />);
}

export default Component;

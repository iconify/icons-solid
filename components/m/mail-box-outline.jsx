import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m25gnw5fq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m25gnw5fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:mail-box-outline"} {...others} />);
}

export default Component;

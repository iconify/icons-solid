import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m42zp2umy.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="m42zp2umy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:gameboy"} {...others} />);
}

export default Component;

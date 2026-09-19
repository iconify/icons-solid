import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o44rubcqw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o44rubcqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:face-grin-tongue-wink"} {...others} />);
}

export default Component;

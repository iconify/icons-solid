import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu8rbqb_z.css';

const viewBox = {"width":957.348,"height":1000};
const content = `<path class="nu8rbqb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:friendfeed"} {...others} />);
}

export default Component;

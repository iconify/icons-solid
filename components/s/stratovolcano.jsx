import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq60ccc1z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lq60ccc1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:stratovolcano"} {...others} />);
}

export default Component;

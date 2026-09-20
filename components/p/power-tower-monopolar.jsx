import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm5kf3b5n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xm5kf3b5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:power-tower-monopolar"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbh-kn0cw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mbh-kn0cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:pedestrian-and-cyclist"} {...others} />);
}

export default Component;

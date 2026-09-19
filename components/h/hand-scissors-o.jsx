import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3h5st27g.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="k3h5st27g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:hand-scissors-o"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bag_e0a9f.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="bag_e0a9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:road-circle-check"} {...others} />);
}

export default Component;

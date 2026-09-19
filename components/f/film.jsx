import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmg3ecoif.css';

const viewBox = {"width":1920,"height":1664};
const content = `<path class="wmg3ecoif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:film"} {...others} />);
}

export default Component;

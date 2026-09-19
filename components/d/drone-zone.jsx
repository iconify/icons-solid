import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8qgz5yfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8qgz5yfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:drone-zone"} {...others} />);
}

export default Component;

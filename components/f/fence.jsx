import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vus2dnwrc.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="vus2dnwrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:fence"} {...others} />);
}

export default Component;

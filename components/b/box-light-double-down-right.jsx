import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csjoy6p0a.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="csjoy6p0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-double-down-right"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyt5_xbfr.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="vyt5_xbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-vertical-right-stipple-down-right"} {...others} />);
}

export default Component;

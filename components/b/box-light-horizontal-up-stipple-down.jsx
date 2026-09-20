import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa2ueoszy.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="oa2ueoszy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-horizontal-up-stipple-down"} {...others} />);
}

export default Component;

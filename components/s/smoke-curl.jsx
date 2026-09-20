import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr_i2abbz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nr_i2abbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:smoke-curl"} {...others} />);
}

export default Component;

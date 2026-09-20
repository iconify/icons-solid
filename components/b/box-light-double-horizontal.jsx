import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa2kh1q4z.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="sa2kh1q4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-double-horizontal"} {...others} />);
}

export default Component;

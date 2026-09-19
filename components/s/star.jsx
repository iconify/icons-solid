import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6vi1xb1x.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="n6vi1xb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:star"} {...others} />);
}

export default Component;

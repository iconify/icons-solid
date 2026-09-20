import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f40r4ef-a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f40r4ef-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:notification"} {...others} />);
}

export default Component;

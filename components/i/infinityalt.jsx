import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkr9aqb5z.css';

const viewBox = {"width":1024,"height":632};
const content = `<path class="mkr9aqb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:infinityalt"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqf_9pu9i.css';

const viewBox = {"width":1025,"height":768};
const content = `<path class="eqf_9pu9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pushbullet"} {...others} />);
}

export default Component;

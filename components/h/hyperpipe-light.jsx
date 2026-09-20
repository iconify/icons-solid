import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i44r3pb5l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i44r3pb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hyperpipe-light"} {...others} />);
}

export default Component;

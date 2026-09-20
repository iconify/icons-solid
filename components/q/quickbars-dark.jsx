import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_ftkyb5l.css';
import '../../css/y/yerqhxb3z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_ftkyb5l"/><path class="yerqhxb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quickbars-dark"} {...others} />);
}

export default Component;

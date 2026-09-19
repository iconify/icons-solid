import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq8y0r2ua.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aq8y0r2ua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:auth0"} {...others} />);
}

export default Component;

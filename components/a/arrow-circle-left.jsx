import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0flmbb4m.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="v0flmbb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:arrow-circle-left"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9ax1cc5k.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="m9ax1cc5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:times-circle"} {...others} />);
}

export default Component;

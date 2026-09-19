import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a96n0ac9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a96n0ac9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ring-stick-up-cam"} {...others} />);
}

export default Component;

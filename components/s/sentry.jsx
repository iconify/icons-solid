import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8g6tm0he.css';

const viewBox = {"width":27,"height":24};
const content = `<path class="o8g6tm0he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:sentry"} {...others} />);
}

export default Component;

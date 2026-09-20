import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt4qfkute.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="mt4qfkute"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-left-horizontal-stipple-up"} {...others} />);
}

export default Component;

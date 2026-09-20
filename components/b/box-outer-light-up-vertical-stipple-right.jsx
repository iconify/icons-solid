import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb-fjmb1q.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="rb-fjmb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-up-vertical-stipple-right"} {...others} />);
}

export default Component;

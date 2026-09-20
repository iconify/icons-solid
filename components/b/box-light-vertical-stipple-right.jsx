import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-xkov5aq.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="o-xkov5aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-vertical-stipple-right"} {...others} />);
}

export default Component;

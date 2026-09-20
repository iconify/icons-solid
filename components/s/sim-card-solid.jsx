import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyb_2jbqc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jyb_2jbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:sim-card-solid"} {...others} />);
}

export default Component;

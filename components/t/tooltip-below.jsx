import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyc2w9b7x.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="jyc2w9b7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:tooltip-below"} {...others} />);
}

export default Component;

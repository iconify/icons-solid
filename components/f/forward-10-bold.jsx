import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw3bu8blb.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="jw3bu8blb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:forward-10-bold"} {...others} />);
}

export default Component;

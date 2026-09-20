import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl7p-6xcz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fl7p-6xcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:part-of-circle-1"} {...others} />);
}

export default Component;

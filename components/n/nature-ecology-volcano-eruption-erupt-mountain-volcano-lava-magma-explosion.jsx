import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_-6axbrw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="i_-6axbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-volcano-eruption-erupt-mountain-volcano-lava-magma-explosion"} {...others} />);
}

export default Component;

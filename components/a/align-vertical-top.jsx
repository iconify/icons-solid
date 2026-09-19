import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsc_azbss.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fsc_azbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:align-vertical-top"} {...others} />);
}

export default Component;

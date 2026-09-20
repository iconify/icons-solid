import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv46m4fcb.css';
import '../../css/u/uwe5bpeob.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nv46m4fcb"/><path class="uwe5bpeob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-plant-growth-soil-nature"} {...others} />);
}

export default Component;

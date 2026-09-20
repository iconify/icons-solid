import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezmjhdcnr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ezmjhdcnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:cctv-dome-ceiling"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tetntvipe.css';
import '../../css/w/wczsurb_t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tetntvipe"/><path class="wczsurb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:warning-alt"} {...others} />);
}

export default Component;

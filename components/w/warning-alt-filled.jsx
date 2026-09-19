import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o605f_yot.css';
import '../../css/c/ce7aadsur.css';
import '../../css/w/wczsurb_t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o605f_yot"/><path class="ce7aadsur"/><path class="wczsurb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:warning-alt-filled"} {...others} />);
}

export default Component;

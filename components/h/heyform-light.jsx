import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0etpyb4l.css';
import '../../css/d/dkp-fpbhf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c0etpyb4l"/><path class="dkp-fpbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:heyform-light"} {...others} />);
}

export default Component;

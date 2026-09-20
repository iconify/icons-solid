import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhq-3hb_f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fhq-3hb_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:palmr-light"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw3j8x2vl.css';
import '../../css/s/sog-c-_ef.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rw3j8x2vl"/><path class="sog-c-_ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:romarr"} {...others} />);
}

export default Component;

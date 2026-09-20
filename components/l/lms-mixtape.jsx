import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj9--rywt.css';
import '../../css/r/rr9a01bpl.css';
import '../../css/d/dz4yw6hux.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oj9--rywt"/><path class="rr9a01bpl"/><path class="dz4yw6hux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lms-mixtape"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-pk2evut.css';
import '../../css/m/mxwo3o_cb.css';
import '../../css/v/v01vscs4u.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="i-pk2evut"/><path class="mxwo3o_cb"/><path class="v01vscs4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:office-building"} {...others} />);
}

export default Component;

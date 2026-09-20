import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2y0w75do.css';
import '../../css/c/cb_h66bqe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x2y0w75do"/><path class="cb_h66bqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wigwam"} {...others} />);
}

export default Component;

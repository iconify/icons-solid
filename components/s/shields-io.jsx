import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfwq3cbmt.css';
import '../../css/b/b8_9rtbiy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sfwq3cbmt"/><path class="b8_9rtbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:shields-io"} {...others} />);
}

export default Component;

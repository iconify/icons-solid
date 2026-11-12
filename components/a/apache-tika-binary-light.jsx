import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3fgq2b2h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s3fgq2b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apache-tika-binary-light"} {...others} />);
}

export default Component;

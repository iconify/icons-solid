import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5pki_gnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5pki_gnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zap-off-round"} {...others} />);
}

export default Component;

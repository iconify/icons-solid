import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvv0n5b3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvv0n5b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:video-fill-round"} {...others} />);
}

export default Component;

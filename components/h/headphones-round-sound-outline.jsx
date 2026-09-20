import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3_twbp1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s3_twbp1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-round-sound-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7d39lbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z7d39lbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:guest-within-height-limit-must-be-supervised"} {...others} />);
}

export default Component;

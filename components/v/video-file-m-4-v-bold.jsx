import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l93-z5byc.css';
import '../../css/t/tc4axubag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l93-z5byc"/><path class="tc4axubag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-file-m-4-v-bold"} {...others} />);
}

export default Component;

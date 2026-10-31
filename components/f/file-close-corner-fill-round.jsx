import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnm-kh31k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hnm-kh31k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-close-corner-fill-round"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0pn1_bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0pn1_bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:video-plus-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d15xdo0sw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d15xdo0sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-plus-logo-2-solid"} {...others} />);
}

export default Component;

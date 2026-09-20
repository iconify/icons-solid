import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuwblnb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fuwblnb_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:sd-card-1-filled"} {...others} />);
}

export default Component;

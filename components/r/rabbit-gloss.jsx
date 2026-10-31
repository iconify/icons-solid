import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyja_c0px.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iyja_c0px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rabbit-gloss"} {...others} />);
}

export default Component;

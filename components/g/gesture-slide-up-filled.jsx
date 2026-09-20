import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n61ytiddf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n61ytiddf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gesture-slide-up-filled"} {...others} />);
}

export default Component;

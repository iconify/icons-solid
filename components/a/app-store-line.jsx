import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkn9-fbga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkn9-fbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:app-store-line"} {...others} />);
}

export default Component;

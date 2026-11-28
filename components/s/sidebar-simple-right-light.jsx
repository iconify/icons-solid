import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2rct2h3q.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="g2rct2h3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:sidebar-simple-right-light"} {...others} />);
}

export default Component;

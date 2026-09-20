import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j60fy-bcw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j60fy-bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:local-movies"} {...others} />);
}

export default Component;

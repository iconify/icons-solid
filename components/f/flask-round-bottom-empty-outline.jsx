import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jeh9i_3ja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jeh9i_3ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:flask-round-bottom-empty-outline"} {...others} />);
}

export default Component;

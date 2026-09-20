import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihgfy3ggy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihgfy3ggy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:android"} {...others} />);
}

export default Component;

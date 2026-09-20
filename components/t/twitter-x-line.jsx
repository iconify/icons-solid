import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmb6m4bku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zmb6m4bku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:twitter-x-line"} {...others} />);
}

export default Component;

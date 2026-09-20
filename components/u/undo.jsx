import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skh9tab_x.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-2};
const content = `<path class="skh9tab_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:undo"} {...others} />);
}

export default Component;

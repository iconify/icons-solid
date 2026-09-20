import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgul6q2_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hgul6q2_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:play-list-line"} {...others} />);
}

export default Component;

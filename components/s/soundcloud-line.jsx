import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wegbl5j3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wegbl5j3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:soundcloud-line"} {...others} />);
}

export default Component;

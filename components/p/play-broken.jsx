import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyf1kh0fw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oyf1kh0fw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:play-broken"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pehz1ac8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pehz1ac8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:media-rewind"} {...others} />);
}

export default Component;

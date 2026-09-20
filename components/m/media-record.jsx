import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc2r8v-9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bc2r8v-9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:media-record"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlrh_nuyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zlrh_nuyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:swipe-right-filled"} {...others} />);
}

export default Component;

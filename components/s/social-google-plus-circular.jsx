import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfb1-up3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfb1-up3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:social-google-plus-circular"} {...others} />);
}

export default Component;

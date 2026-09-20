import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csv4lubho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="csv4lubho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:social-flickr-circular"} {...others} />);
}

export default Component;

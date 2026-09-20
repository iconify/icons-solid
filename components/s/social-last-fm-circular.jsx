import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jva7wh10t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jva7wh10t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:social-last-fm-circular"} {...others} />);
}

export default Component;

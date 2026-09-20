import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_l8lhbcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_l8lhbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:starburst-outline"} {...others} />);
}

export default Component;

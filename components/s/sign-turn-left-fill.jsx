import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy51f2wrm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zy51f2wrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-turn-left-fill"} {...others} />);
}

export default Component;

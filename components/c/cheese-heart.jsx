import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp-1_0bxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sp-1_0bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:cheese-heart"} {...others} />);
}

export default Component;

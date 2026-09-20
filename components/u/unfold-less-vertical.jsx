import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyfn0ssng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hyfn0ssng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:unfold-less-vertical"} {...others} />);
}

export default Component;

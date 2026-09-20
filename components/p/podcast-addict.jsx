import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t31vdhbwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t31vdhbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:podcast-addict"} {...others} />);
}

export default Component;

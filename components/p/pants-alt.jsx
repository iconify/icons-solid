import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2sfgu9ek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2sfgu9ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pants-alt"} {...others} />);
}

export default Component;

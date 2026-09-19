import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwh8l9bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwh8l9bwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:ruler-add"} {...others} />);
}

export default Component;

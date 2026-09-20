import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm7bv5bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mm7bv5bwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:caret-left"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_5_6fbbs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p_5_6fbbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-dome-with-flag"} {...others} />);
}

export default Component;

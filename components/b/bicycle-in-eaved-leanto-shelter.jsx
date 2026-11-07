import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svsjy1b4j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="svsjy1b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bicycle-in-eaved-leanto-shelter"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm8ba9fcy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rm8ba9fcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:roon-dark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eve3a1jad.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eve3a1jad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hyperhdr-dark"} {...others} />);
}

export default Component;

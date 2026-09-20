import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apl3tib4x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="apl3tib4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-walking-under-icy-eave"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj9owmbzf.css';
import '../../css/a/a-4ue5bby.css';
import '../../css/u/u0kmufbam.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rj9owmbzf"/><path class="a-4ue5bby"/><circle class="u0kmufbam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rurdesk-light"} {...others} />);
}

export default Component;

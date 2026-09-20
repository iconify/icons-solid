import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4nwh4frs.css';
import '../../css/r/rkzev_bgd.css';
import '../../css/e/eywngtify.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f4nwh4frs"/><path class="rkzev_bgd"/><path class="eywngtify"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:baserow"} {...others} />);
}

export default Component;

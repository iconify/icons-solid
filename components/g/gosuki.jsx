import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwsftlbby.css';
import '../../css/n/n-9-1s2vc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iwsftlbby"/><path class="n-9-1s2vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gosuki"} {...others} />);
}

export default Component;

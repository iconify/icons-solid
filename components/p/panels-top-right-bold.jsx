import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-tu9rzsd.css';
import '../../css/m/mnd7hcbix.css';
import '../../css/k/k-q3_rj-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e-tu9rzsd"/><path class="mnd7hcbix"/><path clip-rule="evenodd" class="k-q3_rj-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-top-right-bold"} {...others} />);
}

export default Component;

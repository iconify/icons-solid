import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e28y29b_p.css';
import '../../css/k/k-kledcsx.css';
import '../../css/f/fyku39bza.css';
import '../../css/b/b0xttoqnt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e28y29b_p"/><path class="k-kledcsx"/><path class="fyku39bza"/><path class="b0xttoqnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onenote-light"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p80wmyi7m.css';
import '../../css/q/q-umw5rlq.css';
import '../../css/e/eo_4r1b-s.css';
import '../../css/s/slss0bc8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p80wmyi7m"/><circle transform="rotate(-43.97 11.998 12.06)" class="q-umw5rlq"/><path class="eo_4r1b-s"/><path class="slss0bc8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:eventarc"} {...others} />);
}

export default Component;

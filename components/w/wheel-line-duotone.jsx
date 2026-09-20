import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/v/v90gbqbox.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/v/v3fh7p3zu.css';
import '../../css/a/aljsoyb4u.css';
import '../../css/m/msxs31b5m.css';
import '../../css/g/gn4oucjuy.css';
import '../../css/u/uumj9dwvi.css';
import '../../css/t/tl0iwwb_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><circle class="v90gbqbox"/><circle class="h_tsn8bxt"/><path class="v3fh7p3zu"/><path class="aljsoyb4u"/><path class="msxs31b5m"/><path class="gn4oucjuy"/><path class="uumj9dwvi"/><path class="tl0iwwb_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wheel-line-duotone"} {...others} />);
}

export default Component;

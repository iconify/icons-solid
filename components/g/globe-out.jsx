import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr-81f73c.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/i/ijzxuk1zw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gr-81f73c"/><path class="u5h8llb9a"/><path class="ijzxuk1zw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-out"} {...others} />);
}

export default Component;

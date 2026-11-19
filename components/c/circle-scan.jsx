import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1kzsmy6e.css';
import '../../css/r/rfhs39bot.css';
import '../../css/y/y9-k5cx_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x1kzsmy6e"/><circle class="rfhs39bot"/><path clip-rule="evenodd" class="y9-k5cx_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:circle-scan"} {...others} />);
}

export default Component;

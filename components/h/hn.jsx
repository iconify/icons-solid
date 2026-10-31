import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu7tm8qke.css';
import '../../css/b/bc4gh5bbk.css';
import '../../css/q/qxurtqfjt.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="qu7tm8qke"/><path class="bc4gh5bbk"/><path class="qxurtqfjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:hn"} {...others} />);
}

export default Component;

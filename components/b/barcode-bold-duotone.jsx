import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it-7es4xk.css';
import '../../css/h/hy90i3qby.css';
import '../../css/h/h4a44aced.css';
import '../../css/g/grzwsmb2z.css';
import '../../css/a/alh1q2bob.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/k-49hib6s.css';
import '../../css/i/irmghwbga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="it-7es4xk"/><path class="hy90i3qby"/><path class="h4a44aced"/><path class="grzwsmb2z"/><path class="alh1q2bob"/><g class="xtpeb-edw"><path class="k-49hib6s"/><path class="irmghwbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:barcode-bold-duotone"} {...others} />);
}

export default Component;

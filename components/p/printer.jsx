import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7-s-gbak.css';
import '../../css/g/gwnsqtyee.css';
import '../../css/h/h12msvbuz.css';
import '../../css/a/ahklu1bar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a7-s-gbak"/><path class="gwnsqtyee"/><path class="h12msvbuz"/><path class="ahklu1bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:printer"} {...others} />);
}

export default Component;

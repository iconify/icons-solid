import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av4te7bjn.css';
import '../../css/f/f2lwp5bia.css';
import '../../css/f/fgtmhdmbn.css';
import '../../css/v/vc82obr8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="av4te7bjn"/><path class="f2lwp5bia"/><path class="fgtmhdmbn"/><path class="vc82obr8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-crack"} {...others} />);
}

export default Component;

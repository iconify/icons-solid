import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oc0kmx_9t.css';
import '../../css/r/ri7b9-bqf.css';
import '../../css/q/qu38-7frs.css';
import '../../css/m/mo3thdbux.css';
import '../../css/v/v2cgw2k0c.css';
import '../../css/m/mexrmi6al.css';
import '../../css/j/jj57xoigr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oc0kmx_9t"/><path class="ri7b9-bqf"/><path class="qu38-7frs"/><path class="mo3thdbux"/><path class="v2cgw2k0c"/><path class="mexrmi6al"/><path class="jj57xoigr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:usb-cable"} {...others} />);
}

export default Component;

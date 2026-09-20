import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0isbdc3w.css';
import '../../css/s/sbr8f8bth.css';
import '../../css/x/xa-mz4bwm.css';
import '../../css/o/o37n6ybvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k0isbdc3w"/><path class="sbr8f8bth"/><path class="xa-mz4bwm"/><path class="o37n6ybvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-code"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a0dti7bqc.css';
import '../../css/f/fwf_u99xy.css';
import '../../css/g/gha0pub7f.css';
import '../../css/w/wut4osbiu.css';
import '../../css/f/fxvc4nrok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a0dti7bqc wm-shadow"/><path class="fwf_u99xy wm-shadow"/><path class="gha0pub7f"/><path class="wut4osbiu"/><path class="fxvc4nrok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chef-hat"} {...others} />);
}

export default Component;

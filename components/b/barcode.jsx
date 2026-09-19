import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-2fky5wf.css';
import '../../css/u/ui9t6fbrk.css';
import '../../css/o/ov3lkhboq.css';
import '../../css/l/l9uwdzjst.css';
import '../../css/l/lomgru0ya.css';
import '../../css/x/xupt9bcnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-2fky5wf"/><rect class="ui9t6fbrk"/><rect class="ov3lkhboq"/><rect class="l9uwdzjst"/><rect class="lomgru0ya"/><rect class="xupt9bcnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:barcode"} {...others} />);
}

export default Component;

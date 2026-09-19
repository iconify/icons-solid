import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/k-gnzng8y.css';
import '../../css/z/z2o0ujiuj.css';
import '../../css/o/o-4wfsb2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="k-gnzng8y"/><circle class="z2o0ujiuj"/><path class="o-4wfsb2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drafting-compass"} {...others} />);
}

export default Component;

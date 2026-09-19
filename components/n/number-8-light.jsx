import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kx31ghuvp.css';
import '../../css/z/z2o0ujiuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><circle class="kx31ghuvp"/><circle class="z2o0ujiuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-8-light"} {...others} />);
}

export default Component;

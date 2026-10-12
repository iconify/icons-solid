import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6bcy9beb.css';
import '../../css/d/dpowabb3o.css';
import '../../css/l/lk8-97b1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="a6bcy9beb"/><circle class="dpowabb3o"/><path class="lk8-97b1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:jupiter"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uu_7a4y3p.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/q/qsu9n_98r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uu_7a4y3p"/><circle class="zv6cqnbnp"/><path class="qsu9n_98r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-minus"} {...others} />);
}

export default Component;

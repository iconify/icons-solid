import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/puhw2wz1p.css';
import '../../css/j/jf4vsjl9n.css';
import '../../css/x/xd5om9bvr.css';
import '../../css/l/l8vwp4bnt.css';
import '../../css/e/e6rcat6vq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="puhw2wz1p"/><circle class="jf4vsjl9n"/><circle class="xd5om9bvr"/><path class="l8vwp4bnt"/><path class="e6rcat6vq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bath-bubble"} {...others} />);
}

export default Component;

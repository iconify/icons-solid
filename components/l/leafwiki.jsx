import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xblvs3bpj.css';
import '../../css/x/xj4e8-rbm.css';
import '../../css/z/z98gm69xh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xblvs3bpj"/><path class="xj4e8-rbm"/><path class="z98gm69xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:leafwiki"} {...others} />);
}

export default Component;

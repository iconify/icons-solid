import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zde4xzqjy.css';
import '../../css/g/g6-r16bmg.css';
import '../../css/c/cly6unwwo.css';
import '../../css/y/y92rshbew.css';
import '../../css/c/cnr_t4rmh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zde4xzqjy"/><path class="g6-r16bmg"/><path class="cly6unwwo"/><path class="y92rshbew"/><path class="cnr_t4rmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamx-light"} {...others} />);
}

export default Component;

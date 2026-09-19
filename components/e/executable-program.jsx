import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht1gmy20s.css';
import '../../css/d/d_j9e2b0e.css';
import '../../css/e/eqzj32bze.css';
import '../../css/b/bgok00bat.css';
import '../../css/z/z7x3snbvd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ht1gmy20s"/><path class="d_j9e2b0e"/><circle class="eqzj32bze"/><circle class="bgok00bat"/><path class="z7x3snbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:executable-program"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrsdmp1_y.css';
import '../../css/t/tjg9g-oad.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xrsdmp1_y"/><path class="tjg9g-oad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:verdaccio"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t76xesq6f.css';
import '../../css/s/stwi24bsm.css';
import '../../css/i/ip1zolbgn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t76xesq6f"/><path class="stwi24bsm"/><path class="ip1zolbgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rcd-20-bold"} {...others} />);
}

export default Component;

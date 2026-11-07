import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj1s-63ya.css';
import '../../css/u/u2tnche2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xj1s-63ya"/><path class="u2tnche2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-bottom-down-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxp3c3b-j.css';
import '../../css/q/qg_wop5ux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxp3c3b-j"/><path class="qg_wop5ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:grain"} {...others} />);
}

export default Component;

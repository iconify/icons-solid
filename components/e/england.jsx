import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/x/x574dcc_e.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="x574dcc_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:england"} {...others} />);
}

export default Component;
